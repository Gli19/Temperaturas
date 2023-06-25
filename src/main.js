
const express = require('express');
const morgan = require('morgan');


/*INCIALIZACIONES */
const app =express()


/*CONFIGURACIONES */
app.set("port",process.env.PORT || 3000) //PUERTo en el sistemos o 3000



/*MODDILEWARE */
app.use(morgan("dev"))//Mostrar informacion  de las rutas que pide el usuario 
app.use(express.urlencoded({extended:false}))//para poder acepatar desde los formularios los datos que envien los usuarios   false--aceptar nombres formatos en string formatos basicos no imagenes o algo asi 
app.use(express.json())//Poder leer formatos json


/*RUTAS */
app.use("/Temperatura",require('./routes/index.js'))


/**COMENZAR SERVIDOR */
app.listen(app.get("port"),()=>{
    console.log("server PORT",app.get("port"));
})