//Definir variables variables que almacenen los siguiente datos:
//Un nombre: “pepe”
//Una edad: 25
//Un precio: $99.90
//Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
//Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
//Mostrar todos esos valores por consola
//Incrementar la edad en 1 y volver a mostrarla
//Agregar una serie a la lista y volver a mostrarla


let nombre = 'pepe'
let edad = 25
let precio = 99.9
const seriesFavoritas = ['Breaking Bad', 'Fringe', 'Dark']
const peliculasFavoritas = [
    {
        nombre: "Iron Man 1",
        estreno: 2008,
        protagonistas: ["Robert D. Junior", "Jon Favreau", "gwinet paltrow"]
    },
    {
        nombre: "Spider Man NWH",
        estreno: 2021,
        protagonistas: ["Tom Holland", "Tobey Maguire", "Andrew Gardfield"]
    }
]

console.log('Nombre:')
console.log(nombre)

console.log('Edad:')
console.log(edad)

console.log('Precio:')
console.log('$' + precio)

console.log('Series Favoritas:')
console.log(seriesFavoritas)

console.log('Peliculas Favoritas:')
console.log(peliculasFavoritas)

console.log('Nueva edad: ' + (edad + 1))

seriesFavoritas.push('TWD') //agrega al array
console.log(seriesFavoritas)



