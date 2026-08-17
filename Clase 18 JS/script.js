
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