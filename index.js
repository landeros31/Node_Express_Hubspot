const express = require("express")
const cors =require("cors")
const app = express();
const PORT =3000;
const rutas = require("./rutas")

// pantalla de inicio
app.use( express.static('public')) 

// Middleware
app.use(cors())
app.use(express.json())

//rutas
app.use("/api",rutas);

//iniciar servidor
app.listen(PORT, ()=>{
    console.log("servidor iniciado en el puerto:"+ PORT )

})
    
  
  