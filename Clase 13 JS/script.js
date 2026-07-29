/* 
CONDICIONES
Estructuras que van a permitir controlar el flujo de nuestro codigo

IF: el if permite controlar si un bloque de codigo se ejecuta o no bajo una cierta condicion
ELSE: Va siempre seguido de un IF o ELSE IF y se ejecuta cuando a la condicion de este NO sea verdadera
ELSE IF: Va siempre seguido de un IF o ELSE IF y te permite agregar una condicion cuando la condicion de este falle
*/
/* 
let password = prompt('ingrese su contraseña')

let contraseniaCorrecta = password === 'pepe_123'

if(contraseniaCorrecta){
    console.log("bienvenido!")
}
else{
    console.log("Credenciales invalidas")
} */

/* 
let numero_dia = 2

if(numero_dia === 0){
    console.log("Hoy es lunes")
}
else if(numero_dia === 1){
    console.log("Hoy es martes")
}
else if(numero_dia === 2){
    console.log("Hoy es miercoles")
}
else if(numero_dia === 3){
    console.log("Hoy es jueves")
}
else if(numero_dia === 4){
    console.log("Hoy es viernes")
}
else if(numero_dia === 5){
    console.log("Hoy es sabado")
}
else{
    console.log("Hoy es domingo")
}

 */
/* 
Solicitar al usuario su edad (Imaginemos para practicos que el dato siempre es valido (un numero positivo))
Si la edad del usuario es menor a 16 entonces indicar por consola "Es menor de edad"
Si la edad del usuario es entre 16 y 18 entonces indicar por consola "Casi deja de ser menor de edad"
Si la edad del usuario es mayor a 18 entonces indicar por consola "Es mayor de edad"

Para saber si un numero esta en cierto rango podemos usar el && (AND)
Si esta entre tanto && tanto
*/

/* let edad = Number(prompt("ingrese su edad"));
if (edad < 16) {
    console.log("es menor de edad");
} 
else if (edad >= 16 && edad < 18) {
    console.log("casi deja de ser menor de edad");
} 
else {
    console.log("es mayor de edad");
}
 */

/* 
Solicitar al usuario un numero A (Asumimos que el usuario escribira correctamente un numero)
Solicitar al usuario un numero B (Asumimos que el usuario escribira correctamente un numero)
Solicitar al usuario una operacion 

Si la operacion es "+" o "sumar" entonces deberemos por consola mostrar el resultado de la suma de A + B es C
Si la operacion es '-' o "restar" entonces deberemos por consola mostrar el resultado de la resta de A - B es C 
Si la operacion no es ninguno de los anteriores deberemos decir por consola "Operacion invalida, vuelva a intentar"

*/

/* let numeroA = Number(prompt('Ingrese un numero'))
let numeroB = Number(prompt('Ingrese otro numero'))
let operacion = prompt('Ingrese una operacion')
if(operacion === '+' || operacion === 'sumar'){
    console.log(numeroA + numeroB)
}
else if(operacion === '-' || operacion === 'restar'){
    console.log(numeroA - numeroB)
}
else{
    console.log('Operacion invalida, vuelva a intentar')
}
 */


//switch
/* 
Nos sirve para condicionar y lo vamos a utilizar principalmente en condiciones multiples de estricta igual
*/

/* 
Acciones disponibles
"SALTAR" | "CORRER" | "CAMINAR" | "TROTAR"
*/

/* let accion = "CORRER"

switch (accion){
    case "SALTAR": 
        console.log("Estoy saltando!")
        break
    case "CORRER":
    case "RUN":
        console.log('Estoy corriendo!')
        break
    case "CAMINAR": 
        console.log("Estoy caminando!")
        break
    default:
        console.log("ERROR: Accion no definida")
} */


/* 
Solicitar al usuario un numero A (Asumimos que el usuario escribira correctamente un numero)
Solicitar al usuario un numero B (Asumimos que el usuario escribira correctamente un numero)
Solicitar al usuario una operacion 

USANDO SWITCH
Si la operacion es "+" o "sumar" entonces deberemos por consola mostrar el resultado de la suma de A + B es C
Si la operacion es '-' o "restar" entonces deberemos por consola mostrar el resultado de la resta de A - B es C 
Si la operacion no es ninguno de los anteriores deberemos decir por consola "Operacion invalida, vuelva a intentar"

*/

let numeroA = Number(prompt("Ingrese un numero:"))
let numeroB = Number(prompt("Ingrese otro numero:"))
let operacion = prompt("Ingrese una operacion (+, -, sumar, restar):")
switch (operacion) {
    case "+":
    case "sumar":
        let suma = numeroA + numeroB
        console.log("El resultado de la suma es: " + suma)
        break
    case "-":
    case "restar":
        let resta = numeroA - numeroB
        console.log("El resultado de la resta es: " + resta)
        break
    default:
        console.log("Operacion invalida, vuelva a intentar")

}