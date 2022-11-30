class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return (`Nombre completo:  ${this.nombre} ${this.apellido}`)
    }

    addMascotas(m){
        return (this.mascotas.push(m))
    }

    countMascotas(){
        return (this.mascotas.length)
    }

    addBook(b){
        return (this.libros.push(b))
    }

    getBookNames(){
        const newArray = this.libros.map((el) =>  el.nombre)
        return console.log(newArray)                
    }
}

const usuario = new Usuario("Martin" , "Lafauci" , [{nombre: "Historia de dos ciudades", autor: "Charles Dickens"}, {nombre: "El Señor de los Anillos", autor: "JRR Tolkien"}], ["Huesos", "Poochie"]);

console.log(usuario.getFullName());
usuario.addMascotas("Procer")
console.log(usuario.countMascotas());
usuario.addBook({nombre : "Harry Potter y la cámara secreta", autor : "JK Rowling"});
console.log(usuario.getBookNames());








