//codigo del servidor, no se lo enviamos al usuario

//configuracion basica para crear el servidor Express y la conexion de websocket
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//lleva la informacion estatica a la carpeta public
app.use(express.static('public'))

//BD mensajes
const mensajes = []

//
io.on('connection', socket => { //nombre de evento, funcion con la que recibimos el evento
    console.log('Nuevo cliente conectado')

    socket.emit('cliente', 'bienvenido') ///mensaje de prueba

    socket.emit('mensajes', mensajes) // envia los mensajes previos

    socket.on('mimensaje', data => { //"escucha" el evento creado en index.js. en Data viaja la info
        console.log(data)

        mensajes.push({socketid: socket.id, mensaje: data}) //al llegar el mensaje con el push lo guardamos en la BD de mensajes. con las llaves crea el objeto

        io.sockets.emit('mensajes', mensajes)//data ex mensajes
    })
})

//configura y corrobora que el puerto escuche
const PORT = 8080 
httpServer.listen(PORT, () => {
    console.log('escuchando en el 8080')
})

//Consola:
//npm init -y
//npm i express socket.io