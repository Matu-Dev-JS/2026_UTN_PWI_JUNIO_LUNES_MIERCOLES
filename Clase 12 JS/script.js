console.log('hola \'mundo')

//TIPOS DE DATOS Primitivos
//Numericos
16
7
-40
1.2
-1.2

//String
'hola'
'mati'
'1'
"que tal?"
"Hola\""

//Booleanos
true
false

//null
null

//undefined
undefined



//Constructores/Transformadores

Number('1') //1
Number('hola') //NaN

String(50) //'50'


//Si boolean devuelve verdadero decimos que un dato es Truthy 
Boolean(50) //true

//Sino es falsy
//Falsy son todos los datos que al pasarlos a boolean dan false
Boolean(0) //false
Boolean(null) 
Boolean(undefined)
Boolean('')
Boolean(NaN)



//Comparadores
//Nos permiten comparar datos
//Siempre devuelven booleanos

//Es igual a: ==
'mati' == 'mati'
1 == '1'

//Es estrictamente igual a: === (RECOMENDABLE)
1 === '1' //False 

//Es distinto de: !=
1 != 2
1 != '1'

//Es estrictamente distinto de: !==
1 !== '1'

//Es mayor a: >
//Es menor a: <
//Es mayor igual: >=
//Es menor igual: <=


//Excepcion de NaN
//NaN Es un dato UNICO, es el unico dato que es incomparable, nisiquiera consigo mismo
NaN == NaN // false

//La forma correcta de saber si un valor es NaN es mediante la funcion nativa isNaN()
isNaN('hola') //true
isNaN('1') //False


//Operadores logicos

//NOT: !
//Podemos hacer negaciones
//Devolvera el valor booleano opuesto al valor negado
/* !(true) //false
!('hola') //false
!(Number('hola')) //true

esDeDia = true
esDeNoche = !esDeDia */

//OR
//Para hacer condiciones compuestas
//Va a seleccionar un valor entre 2 valores
//Si el primer valor es Truthy seleccionara el primero
//Si el primer valor es Falsy seleccionara el segundo

70 || 90 //70
Number('8') || null //8
null || undefined //undefined

//Contesto la pregunta si estoyLibre o esHorarioLaboral
//contestoPregunta = estoyLibre || esHorarioLaboral

//AND
//Para hacer condiciones compuestas
//Va a seleccionar un valor entre 2 valores
//Si el primer valor es Truthy seleccionara el segundo
//Si el primer valor es Falsy seleccionara el primero

0 && true //0
false && null //false
50 && undefined //undefined


//Operadores aritmeticos

//Concatenacion: +
//Ocurre cuando hay un string en la operacion
//Transforma cualquier valor no string a string y concatena (unifica las cadenas)
//SIEMPRE DEVUELVE UN STRING
50 + 'hola'
//String(50) + 'hola
//'50' + 'hola' = '50hola'

'1' + 1 //'11'

null + '1' //'null1'


//Suma: +
//Ocurre cuando NO hay un string en la operacion
//Transforma cualquier valor no numerico en numero y suma
//siempre devuelve numero


40 + 60 //100
true + 1 //2
50 + Number('hola') //NaN

//Resta: -
//Transforma cualquier valor no numerico en numero y resta
//siempre devuelve numero
50 - '1' //49

//Division: /
//Multiplicacion: *

//Cualquier operacion (excepto la concatenacion con NaN da NaN)


//Variables


//VAR antes de ES6, no se recomienda usar

//Podes redeclarar
//Poder reasingar
//Tiene hoisting
//El valor por defecto si no asignas algo es undefined

/* var apellido
console.log(apellido)
 */
/* console.log(nombre)
var nombre = 'pepe'
var nombre = 'pepe'
nombre = nombre + ' suarez'

console.log("Hola mi nombre es " + nombre) */



//LET +ES6

//Poder reasingar
//Podes redeclarar (en distinto bloque)
//El valor por defecto si no asignas algo es undefined
//NO Tiene hoisting


/* let nombre = 'pepe'


{
    let nombre = 'jose' 
    console.log(nombre)
}

{
    nombre = 'maria'
}

console.log(nombre) */

//CONST +ES6: Se usa para los valores que seran iguales desde el incio hasta el final del programa
//NO Poder reasingar
//Podes redeclarar (en distinto bloque)
//NO tiene valor por defecto
//NO Tiene hoisting

/* const app_version = '1.0'
const IVA = 21 */

let nombre = prompt('Ingrese su nombre:')

if(nombre == 'pedro'){
    console.log("Que haces aca? 🤬")
}
else{
    console.log("Bienvenido/a " + nombre + '!')
}


/* 
Solicitar al usuario una contraseña, si la contraseña coincide con password_123 decir 'Inicio de sesion exitoso' sino decir 'Credenciales invalidas, vuelva a intentar'
*/


let contrasenia = prompt('Ingrese una contraseña:')
if(contrasenia == 'password_123'){
    console.log('Incio de sesion exitoso')
}
else{
    console.log('Credenciales invalidas, vuelva a intentar')
}