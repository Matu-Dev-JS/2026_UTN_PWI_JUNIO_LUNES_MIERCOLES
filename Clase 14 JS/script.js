/* 
Bucles FOR
Funciones
Metodos de string
*/

//Bucles
//condicionales => WHILE => mientras x condicion sea verdadera x bloque de codigo se repetira
//por limite => FOR => Un bloque de codigo se repetira una x cantidad de veces

//SABEMOS CUANTAS VECES SE REPITE ALGO? cual es el limite?
//SI: FOR
//NO: WHILE

//Ejecuta un "hola mundo" 5 veces

/* for(
    let iterador = 1;
    iterador <= 5; //limite, mientras esto sea verdadero, el bloque de codigo se ejecuta
    iterador = iterador + 1
)
{   
    console.log('El iterador ahora vale: ' + iterador)
    console.log('hola mundo')
} */

/* for(
    let iterador = 10;
    iterador >= 1;
    iterador = iterador - 1
){   
    console.log('El iterador ahora vale: ' + iterador)
    console.log('hola mundo')
} */

/* 
Sacar un promedio de 3 notas 
Solicitar 3 notas (1 de cada trimestre)
Calcular el promedio
*/

//FOR: Accion: pedir una nota y sumarla al resto, veces: 3
/* 
let sumatoria_notas = 0

for(
    let iterador = 1; 
    iterador <= 3;
    iterador = iterador + 1
){
    let nota = prompt("ingresa la nota del (" + iterador + ")")
    nota = Number(nota)
    sumatoria_notas = sumatoria_notas + nota
}

let promedio = sumatoria_notas / 3
alert("El promedio anual es " + promedio) 
*/

//Formula para obtener un numero aleatorio entre 1 y 20
/* let numero_random = Math.floor( (Math.random() * 20) + 1 )
console.log('Numero aleatorio generado: ' + numero_random)
 */
//Pan y queso
/* 
El usuario debe elegir si sera "pan" o "queso",
se calculara un numero aleatorio entre 1 y 20
vamos a alternar entre pan y queso hasta llegar al numero aleatorio (pueden determinar quien inicia con otro numero aleatorio)
el valor final determinara si el usuario gano (si el valor final es igual al valor seleccionado)
*/

/* let seleccionado = 'pan'
if(seleccionado === 'pan'){
    seleccionado = 'queso'
}
else{
    seleccionado = 'pan'
} */
/* 
let eleccion_usuario = prompt("Elegi 'pan' o 'queso'");

let numero_random = Math.floor(Math.random() * 20) + 1;

let palabra
if(Math.random() > 0.5){
    palabra = 'pan'
}
else{
    palabra = 'queso'
}
for (
    let i = 1; 
    i <= numero_random;
    i = i + 1
) {
    if (palabra === "pan") {
        palabra = "queso";
    } else {
        palabra = "pan";
    }
    console.log(palabra)
}
console.log("Resultado final:", palabra);
if (palabra === eleccion_usuario) {
    console.log("¡Ganaste!");
} else {
    console.log("Perdiste.");
} */

/* Funciones */
/* 
Nos permiten guardar bloques de codigo parametrizables en memoria
*/
//arrow function / funcion en flecha
/* const saludar_2 = () => {
    console.log('hola mundo')
} */

//Declaracion de una funcion
//Cuando declaramos una funcion basicamente estamos diciendo esta funcion existe con este nombre y hace esto, es un manual de lo que hara
/* function saludar(){
    console.log('hola mundo')
} */

//Invocacion / llamada de la funcion / ejecutar
/* saludar()
saludar()
saludar()
 */

//a y b son los parametros de la funcion sumar
//Un parametro es un valor que se le transmitira a una funcion cuando es invocada
/* function sumar (a, b){
    console.log('El resultado de ' + a + ' + ' + b + ' es ' + (a + b))
}


let caja_este_mes = 40000
let caja_mes_pasado = 79000

sumar(caja_este_mes, caja_mes_pasado)
sumar(7, 90) */


//f(x) = 2x + 3
//f(x = 2) = 2.2 + 3 = 7
//f(x = 3) = 2.3 + 3 = 9

/* 
Crear una funcion llamada calcularIva que recibira un numero y mostrara por consola "el iva de ${numero} es ${iva}"
*/
/* function calcularIva (precio){
    let iva = precio * 0.21
    console.log("el iva de $" + precio + " es $" + iva)
}

calcularIva(7000) */

/* 
Crear una funcion llamada saludar que reciba un nombre y diga por consola "Hola {nombre}!"
*/

function saludar (nombre){
    console.log("Hola " + nombre + '!')
}
saludar('Pepe')