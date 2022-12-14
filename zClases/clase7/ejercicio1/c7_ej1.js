const express = require('express')

const app = express()

const frase = 'Hola Mundo como estan'

//gets

//1
app.get('/api/frase', (req, res) => {
    res.json({frs: frase})
})

//2
app.get('/api/letras/:num', (req, res) => {
    const num = req.params.num
    
    if (isNaN(num)) {
        return res.json({error: 'El parámetro ingresado no es un número'})
    }

    if (num < 1 || num > frase.length) {
        return res.json({error: 'El parámetro ingresado está fuera de rango'})
    }

    res.send(frase[num - 1])
})

//3
app.get('/api/palabras/:num', (req, res) => {
    const num = req.params.num
    
    if (isNaN(num)) {
        return res.json({error: 'El parámetro ingresado no es un número'})
    }

    const palabras = frase.split(' ')
    if (num < 1 || num > frase.length) {
        return res.json({error: 'El parámetro ingresado está fuera de rango'})
    }

    res.send(palabras[num - 1])
})


const PORT = 8080
const server = app.listen(PORT, () =>{
    console.log('Servidor escuchando en el puerto 8080')
})
