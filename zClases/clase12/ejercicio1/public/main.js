const socket = io()

socket.on('messages', data => { //recorre los mensajes y extrae la info solicitada
    const html = data.map(msj => {
        return `<div>
        <strong>${msj.author}</strong>
        <em>${msj.text}</em>
        </div>`
    })
    .join("  ") //los junta dejando un espacio

    document.getElementById("messages").innerHTML = html // envia el render a messages del HTML
})

function addMessage() {
    const message = {
        author: document.getElementById("username").value, //envia el valor author al id username del HTML
        text: document.getElementById("text").value //envia el valor author al id text del HTML
    }

    socket.emit('new-message', message) // envia el mensaje al front
    return
}