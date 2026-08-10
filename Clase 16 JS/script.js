//primitivos
//strings
//numbers
//boolean
/* let nombre_1 = 'pepe'
let nombre_2 = nombre_1
nombre_1 = 'juan' */
//Cuanto vale nombre_2?
//console.log(nombre_2) sigue valiendo 'pepe'

//objeto
//array
/* 
const nombres_1 = ['pepe', 'juan', 'maria']

const nombres_2 = nombres_1

//.push esta agregando un elemento al final de la lista
nombres_1.push('adrian')

console.log(nombres_2) */

//Conclusion: Declarar como constante a los tipos de dato objeto para proteger su referencia


//Metodos de array
//Nos permiten manipular un array


//let nombres = ['pepe', 'juan', 'maria', 'carlos']

//Mutables
//Modifican el array original
//nombres.push('maria')


//Inmutables
//NO modifican el array original
//let indice_pepe = nombres.indexOf('pepe')
//console.log(indice_pepe)

//.push = Agregar un elemento al final de la lista
//nombres.push('maria')

//.pop = Elimina el ultimo elemento de la lista
//nombres.pop()

//.shift = Elimina el primer elemento de la lista
//nombres.shift()

//.unshift = Agrega un elemento al principio de la lista
//nombres.unshift('maria')

//.includes = verifica si x elemento esta en el array
//console.log(nombres.includes('maria'))

//.indexOf = averiguar el indice de un elemento, si no esta devuelve -1
//console.log(nombres.indexOf('pepe1'))

//.splice = eliminar o agregar o suplantar elementos del array

//Eliminar a juan
/* let indice_juan = nombres.indexOf('juan')
nombres.splice(indice_juan, 1) */

//Agregar a alguien donde esta juan
/* let indice_juan = nombres.indexOf('juan')
nombres.splice(indice_juan, 0, 'adrian') */

//Suplantar a juan por adrian
/* let indice_juan = nombres.indexOf('juan')
nombres.splice(indice_juan, 1, 'adrian') */

//agregar antes de juan
/* let indice_posterior_juan = nombres.indexOf('juan') + 1
nombres.splice(indice_posterior_juan, 0, 'adrian')

console.log(nombres) */

/* let nombres = ['pepe', 'juan', 'maria', 'carlos', 'jose', 'julieta', 'ana']

//Verificar si existe 'pedro', en caso de existir decir "Pedro!" por consola
function estaPedro(){
    if(nombres.includes("pedro")){
        console.log("Pedro!")
    }
    else{
        console.log("Pedro no esta!")
    }
}
estaPedro()


//eliminar a 'maria'
let indice_maria = nombres.indexOf("maria")
nombres.splice(indice_maria, 1)

//Reemplazar a 'jose' por 'josesito'
let indice_jose = nombres.indexOf('jose');
nombres.splice(indice_jose, 1, 'josesito');

console.log(nombres); */

//FOR OF
//Un bucle para recorrer arrays
/* let nombres = ['pepe', 'juan', 'maria']


//Por cada nombre de la lista de nombres ejecutar x bloque de codigo
for(let nombre of nombres){
    console.log("Hola " + nombre + '!')
} */

const notas = [90, 40, 100]
//Crear una funcion llamada calcularPromedio que dado una lista de numeros me devuelva su promedio
//Usar FOR OF para recorrer la lista