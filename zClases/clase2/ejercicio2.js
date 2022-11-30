//En este ejercicio construiremos una herramienta que permita que diferentes 
//personas puedan llevar cuentas individuales sobre algo que deseen contabilizar, 
//al mismo tiempo que nos brinde una contabilidad general del total contado. 
//Para ello:
//1-Definir la clase Contador.
//2-Cada instancia de contador debe ser identificada con el nombre de la persona responsable de ese conteo.
//3-Cada instancia inicia su cuenta individual en cero. 
//4-La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo contado por sus instancias, el cual también inicia en cero.
//5-Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
//6-Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
//7-Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
//8-Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general

class Contador {
    constructor(nombre) { 
        this.nombre = nombre
        this.cuentaIndividual = 0 //instancia individual
    }

    static cuentaGlobal = 0 //instancia general

    contar() {
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }

    obtenerResponsable() {
        return this.nombre
    }

    obtenerCuentaIndividual(){
        return this.cuentaIndividual
    }

    obtenerCuentaGlobal(){
        return Contador.cuentaGlobal
    }
}

const pepe = new Contador('pepe')
const juana = new Contador ('juana')

console.log(juana.obtenerResponsable())

juana.contar()
juana.contar()
juana.contar()

console.log(juana.obtenerCuentaIndividual())
console.log(juana.obtenerCuentaGlobal())

console.log(pepe.obtenerResponsable())
pepe.contar()
pepe.contar()

console.log(pepe.obtenerCuentaIndividual())
console.log(pepe.obtenerCuentaGlobal())