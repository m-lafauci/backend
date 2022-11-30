const socket = io()

const input = document.querySelector('input') //selecciona-busca el input del html

document.querySelector('button').addEventListener('click', () => { //crea un eventon cuando se hace clic en el boton que escucha el input del html y emite un mensaje al servidor con el contenido(value) del input
    socket.emit('mimensaje', input.value) //miMensaje es la key y envia la info al server.js
})

socket.on('mensajes', data => { //escucha el emit de server.js
    
    const mensajesHTML = data
        .map(msj => {
            if (msj.socketid == socket.id) {
                msj.socketid = 'yo'
            } 
            return `SocketID: ${msj.socketid} digo: ${msj.mensaje}`
    })
        .join('<br>') //los une con un salto de linea

    document.querySelector('p').innerHTML = mensajesHTML // escribe en el p del HTML
})

socket.on('cliente', data =>{
    alert(data)
}) // recibe el mensaje de prueba