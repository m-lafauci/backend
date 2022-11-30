const fs = require("fs")
const express = require("express")

const app = express()

class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
        this.productos = [];
    }
    
    async read() {
        try {
            let existe = await fs.promises.readFile(this.nombreArchivo, 'utf-8')
            return existe
        } catch (error) {
            console.log("Se ha producido un error" + error)
        }
    }

    getId() {
        const length = this.productos.length

        if (length === 0) {
            return 0
        } else {
            return this.productos.length
        }
    }

    async save(producto) {
        const id = this.getId()

        this.productos.push({
            ...producto, ...{ id: id + 1 }
        })
        try {
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(this.productos, null, 2));
        }
        catch (error) {
            console.log("Se ha producido un error" + error)
        }
    }

    async getById(id) {
        const buscarPorId = await this.productos.find((e) => e.id === id)
        return buscarPorId
        }

    async getAll() {
        const buscarTodos = await this.productos
        return buscarTodos
        }
}

const data = new Contenedor("./productos.txt")

data.save({ "title": "Escuadra", "price": 123.45, "thumbnail": "./img_escuadra.jpg" })
data.save({ "title": "Calculadora", "price": 234.56, "thumbnail": "./img_calculadora.jpg" })
data.save({ "title": "Globo Terraqueo", "price": 345.67, "thumbnail": "./img_globoterraqueo.jpg" })

app.get("/productos", async (req, res) => {
    const getProductos = await data.getAll()
    try {
        res.send(getProductos)
    }
    catch {
        res.send("Se ha producido un error")
    }
})

app.get("/productoRandom", async (req, res) => {
    const idRandom = parseInt((Math.random() * 3) + 1)
    const getProductoRandom = await data.getById(idRandom)
    try {
        res.send(getProductoRandom)
    }
    catch {
        res.send("No se ha encontrado el producto")
    }
})

const server = app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080")
})

server.on("err", error => console.log("Se ha producido un error" + error))

