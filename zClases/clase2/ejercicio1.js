//Definir la función mostrarLista que reciba una lista de datos y 
//muestre su contenido, si no está vacía, o de lo contrario muestre 
//el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar 
//que funciona bien en ambos casos.
function mostrarLista(arr) {
    if (arr.length == 0) { //chequea el contenido del array. en este caso si es distinto a cero.
        console.log('La lista esta vacia');
        return
    }
    console.log(arr);
}

mostrarLista([]);
mostrarLista([1, 2, 3]);

//Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, 
//pasando una lista con 3 números como argumento.
(function mostrarLista(arr) {
    if (arr.length == 0) { //chequea el contenido del array. en este caso si es distinto a cero.
        console.log('La lista esta vacia');
        return
    }
    console.log(arr);
})([1, 2, 3]) //funcion anonima que se ejecuta en el momento

//Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número
//y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones
// duplicar y triplicar, y probarlas con diferentes valores.
function crearMultiplicador(num){
    return function(num2){
        console.log(num * num2)
    }
}

const duplicador = crearMultiplicador(2)
const triplicador = crearMultiplicador(3)

duplicador(6)
triplicador(6)



