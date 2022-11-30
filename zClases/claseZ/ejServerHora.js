const http = require('http')

const server = http.createServer((request, response) => {
    const mensaje = getMensajeSegunHora()
    response.end(mensaje)
})

function getMensajeSegunHora() {
    const hora = new Date().getHours()

    if (hora >=6 && hora <=12){
        return 'Buenos dias'
    }

    if (hora >=13 && hora <=19){
        return 'Buenas tardes'
    }

    return 'Buenas noches'
}

const PORT = 8080

const connectedServer = server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT)
})

