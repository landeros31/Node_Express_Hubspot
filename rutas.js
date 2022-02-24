const router = require('express').Router()
const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client({ apiKey: "2017838c-4ff6-47bd-975e-d14acdadb011" })
const idTable="5315435";

router.get('/data-table', async (request,response)  => {

    const res = await hubspotClient.cms.hubdb.rowsApi.getTableRows(idTable)
    response.send(res)
});

router.get('/data-table/:id', async (request,response)  => {
        const id =request.params.id
        try {
            const res = await hubspotClient.cms.hubdb.rowsApi.getTableRow(idTable,id)
            response.send(res.values)
            } catch (error) {
            response.send(error)
        
            }
});

router.get('/draft-table', async (request,response)  => {

    const res = await hubspotClient.cms.hubdb.rowsApi.readDraftTableRows(idTable)   
    
   console.log(res)
   response.send(res)
});

router.post('/data-table', (request,response)  => {

    const values=request.body

    try {
    hubspotClient.cms.hubdb.rowsApi.createTableRow(idTable,values)  
    hubspotClient.cms.hubdb.tablesApi.publishDraftTable(idTable)
    response.send("publicado con exito")
    } catch (error) {
        response.send(error)
       
    }

    });

router.put('/data-table/:id', async (request,response)  => {

    const id =request.params.id
    const values=request.body

    try {
        const res = await hubspotClient.cms.hubdb.rowsApi.updateDraftTableRow(idTable,id,values)
        hubspotClient.cms.hubdb.tablesApi.publishDraftTable(idTable)
        response.send("editado con exito")
        } catch (error) {
        response.send(error)
    
        }
});
router.delete('/data-table/:id', async (request,response)  => {

    const id =request.params.id
    
    try {
        const res = await hubspotClient.cms.hubdb.rowsApi.purgeDraftTableRow(idTable,id)
        hubspotClient.cms.hubdb.tablesApi.publishDraftTable(idTable)
        response.send("eliminado con exito")
        } catch (error) {
        response.send(error)
    
        }
   
});

module.exports = router;