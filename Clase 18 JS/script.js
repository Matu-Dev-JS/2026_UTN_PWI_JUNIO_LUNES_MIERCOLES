
const btn_click = document.getElementById('btn')


function saludar (){
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
let contador = 0

function renderContador (){
    spanContador.textContent = contador
}

//Esta funcion es la encargada de modificar el estado
//Cada vez que modifique el valor de mi estado debo volver a renderizar todos los componentes asociados a mi estado
function setContador (valor){
    contador = valor
    renderContador()
}

function sumar(){
    setContador(contador + 1)
}

function restar(){
    setContador(contador - 1)
}

btnResta.addEventListener (
    "click", 
    restar
)
btnSuma.addEventListener(
    "click",
    sumar
)


/* 
Selector de opciones

Al clickear una opcion la seleccionare, dependiendo de la opcion que seleccione en el div de opcion seleccionada debe aparecer el numero de la opcion (selecciono opcion 1 y debe decir "Opcion seleccionada: 1")
*/

const button_1 = document.getElementById('btn_1')

console.log(button_1.getAttribute('data-option-number'))
