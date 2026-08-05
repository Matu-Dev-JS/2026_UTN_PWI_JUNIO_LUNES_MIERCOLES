//Funciones
//Sirven para guardar bloques de codigo parametrizables
//Las funciones pueden retornar un resultado
//Cuando usamos el retorno, la funcion corta su ejecucion


//tipoIva = 'general', 'reducido', 'aumentado'
/* function determinarPorcentajeIva (tipoIva){
    let factor_porcentaje = 0
    if(tipoIva === 'general'){
        factor_porcentaje = 21
    }
    else if(tipoIva === 'reducido'){
        factor_porcentaje = 10.5
    }
    else if(tipoIva === 'aumentado'){
        factor_porcentaje = 27
    }
    return factor_porcentaje
}


function calcularIva (precio, tipoIva){
    let iva = precio * (determinarPorcentajeIva(tipoIva) / 100)
    return iva
}



let iva800 = calcularIva(800, 'reducido')
console.log('El iva de $800 es $' + iva800)

let iva1000 = calcularIva(1000, 'reducido')
console.log('Guadamos en DB') */


/* 
crear la funcion calcular que recibira 3 parametros
    a: es un numero
    b: es un numero
    operacion: es un string que puede ser '+' o '-'
Si la operacion es + debera retornar el resultado de la suma de a + b
Si la operacion es - debera retornar el resultado de la resta de a - b

NO se solicita el uso de PROMPTS
*/

/* function calcular(a, b, operacion){
    let resultado 
    if(operacion === "+"){
        resultado = (a + b)
    }
    else if(operacion === "-"){
        resultado = (a - b)
    }
    else{
        return null
    }
    return resultado
}

console.log( calcular(50, 50, '+') ) //100
console.log( calcular(50, 50, '-') ) //0 */

//arrays

//Los arrays nos permiten almacenar una lista de datos ordenados
//Sinonimos: array, listas, colecciones, matrices

//los datos dentro de un array tienen un numero de indice que indicara su posicion dentro de este
//La cantidad de elementos en un array es infinita
/* let nombres = [
    'pepe', //indice 0
    'maria', //indice 1
    'juan' //indice 2
] */

/* console.log("El segundo nombre de la lista es " + nombres[1]) */

//Los arrays guardan la propiedad .length, esta indica la cantidad de elementos que hay dentro del array
/* console.log('La cantidad de nombres es ' + nombres.length) */

//ejemplo:
/* let nombres = ['pepe', 'maria', 'juan']
let notas = [10, 5, 10]
let datos = [true, null, 10, 'hola'] */

/* 
Ejemplo de la vida real:

let tipos_iva_disponibles = [
    'reducido',
    'aumentado',
    'general'
]

let tipo_iva_seleccionado = 'general'

if(!tipos_iva_disponibles.includes(tipo_iva_seleccionado)){
    console.log("error, tipo iva invalido")
} */


//Los arrays son iterables, osea podemos recorrerlos con bucles

/* let nombres = ['pepe', 'maria', 'juan']

for(
    let indice = 0;
    indice < nombres.length;
    indice = indice + 1
){
    console.log('Indice: ' + indice)
    console.log("hola " + nombres[indice])
} */

//Dado una lista de numeros, calcular su sumatoria (osea el resultado de sumar todos los numeros de la lista)
//let numeros = [500, 400, 100] //1000

//let numeros = [500, 400, 100, 600] //1600

/* 
let numeros = [500, 400, 100, 600]
let sumatoria = 0
for (
    let indice = 0;
    indice < numeros.length;
    indice = indice + 1
) {
    sumatoria = sumatoria + numeros[indice];
}
console.log("Resultado final: " + sumatoria); 
*/

/* let tipos_iva = [
    ['general', 21],
    ['reducido', 10.5],
    ['aumentado', 27]
]
 */
/* 
Crear una funcion que se llame obtenerIva(tipoIva) y busque el valor del iva dado cierto tipoIva
Si el tipoIva es invalido devolver null

Como debe funcionar: 
    obtenerIva('general') retorna 21
    obtenerIva('reducido') retorna 10.5
    obtenerIva('pepe') retorna null
*/

let tipos_iva = [
    ["general", 21],
    ["reducido", 10.5],
    ["aumentado", 27]
]
function obtenerIva(tipoIva) {
    for (
        let i = 0; 
        i < tipos_iva.length; 
        i = i + 1
    ) {
        let nombre_tipo_iva = tipos_iva[i][0]
        let valor_tipo_iva = tipos_iva[i][1]
        if (nombre_tipo_iva === tipoIva) {
            return valor_tipo_iva
        }
    }
    return null
}



