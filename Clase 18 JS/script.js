
const btn_click = document.getElementById('btn')


function saludar() {
    const div = document.getElementById('contenedor-principal')
    div.innerHTML = `<h1>Hola que tal!</h1>`
}

/* 
addEventListener es un metodo de los elementos del DOM que permite asociar una funcionalidad a un evento
Tiene 2 parametros:
    - (string) Tipo de evento
    - (funcion) Accion
*/
btn_click.addEventListener(
    'click',
    saludar
)

/* 
Contador
- El boton de resta decrementara tu contador
- El boton de suma incrementara tu contador
- El span mostrara el valor del contador (inicialmente 0)

Recomendacion:
- Tener una variable en JS con el valor de tu contador y esa variable mostrarla en el span

*/


const btnResta = document.getElementById("btn_cont_resta")
const btnSuma = document.getElementById("btn_cont_suma")
const spanContador = document.getElementById("contador")

//Esto es un estado
//Es inmutable
let contador = 100

function renderContador() {
    spanContador.textContent = contador
}

//Esta funcion es la encargada de modificar el estado
//Cada vez que modifique el valor de mi estado debo volver a renderizar todos los componentes asociados a mi estado
function setContador(valor) {
    contador = valor
    renderContador()
}

function sumar() {
    setContador(contador + 1)
}

function restar() {
    setContador(contador - 1)
}

btnResta.addEventListener(
    "click",
    restar
)
btnSuma.addEventListener(
    "click",
    sumar
)
renderContador()


/* 
Selector de opciones

Al clickear una opcion la seleccionare, dependiendo de la opcion que seleccione en el div de opcion seleccionada debe aparecer el numero de la opcion (selecciono opcion 1 y debe decir "Opcion seleccionada: 1")

Ayudita:
- Todos los elementos estas asociadas a la misma accion
- La accion es indentificar cual es el option number del boton que 
*/

/* const button_1 = document.getElementById('btn_1')
const button_2 = document.getElementById('btn_2')
console.log(button_1.getAttribute('data-option-number'))


function seleccionarOpcion (evento){
    //El target es el elemento de donde se disparo el evento
    console.log(evento.target)
    console.log(evento.target.getAttribute('data-option-number'))
}


button_1.addEventListener('click', seleccionarOpcion)
button_2.addEventListener('click', seleccionarOpcion) */

const btn1 = document.getElementById("btn_1")
const btn2 = document.getElementById("btn_2")
const btn3 = document.getElementById("btn_3")
const divResultado = document.getElementById("resultado")

let opcion_seleccionada = null

function renderOpcionSeleccionada (){
    if(opcion_seleccionada){
        divResultado.innerText = "Opcion seleccionada: " + opcion_seleccionada
    }
    else{
        divResultado.innerText = 'No has seleccionado ninguna opcion'
    }
}

function setOpcionSeleccionada (valor){
    opcion_seleccionada = valor
    renderOpcionSeleccionada()
}

function seleccionarOpcion(evento) {
    const numeroOpcion = evento.target.getAttribute("data-option-number")
    setOpcionSeleccionada(numeroOpcion)
}

btn1.addEventListener("click", seleccionarOpcion)
btn2.addEventListener("click", seleccionarOpcion)
btn3.addEventListener("click", seleccionarOpcion)
renderOpcionSeleccionada()


const formulario_login = document.getElementById('formulario-login')

function login (evento){
    evento.preventDefault() //Desactivo el comportamiento por defecto del evento
    const formulario = evento.target
    const resultado = {
        email: formulario.email.value,
        password: formulario.password.value
    }
    console.log(resultado)
}

formulario_login.addEventListener('submit', login)