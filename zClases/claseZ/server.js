const http = require('http')

const server = http.createServer((mensaje, respuesta) => {
    respuesta.end('Hola Martin Lafauci')
})

const connection = server.listen(8080, () => {
    console.log('Servidor escuchando en el 8080')
})


