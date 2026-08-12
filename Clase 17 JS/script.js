/* DOM Document Objet Model */
/* 
Es un objeto que nos permite manipular el HTML desde JS
*/


//getElementById = Nos permite buscar un elemento por id dentro de nuestro HTML
const titulo = document.getElementById('titulo')
console.dir(titulo)

console.log(titulo.innerText)
titulo.innerText = 'Que tal? desde JS'

let nombre = 'pepe'

/* const caja = document.getElementById('caja')*/
/* caja.innerHTML = `
    <h2>Hola ${nombre}</h2>
    <button>Click</button>
` */


/* const producto = {
    id: 1, 
    titulo: 'Tv Samsung 52"',
    precio: 4000
} */
/* 
Dado el producto escribir dentro de un elemento con id product-card
h2: titulo
span: precio

Estructura: 
    <h2></h2>
    <div>
        <span>Precio: <strong>$4000</strong></span>
    </div>
    <button>Comprar</button>
*/
/* const producto = {
    id: 1,
    titulo: 'Tv Samsung 52"',
    precio: 4000
};
const cardContainer = document.getElementById('product-card');
cardContainer.innerHTML = `
    <h2 class='producto_titulo'>${producto.titulo}</h2>
    <div>
    <span>Precio: <strong>$${producto.precio}</strong></span>
    </div>
    <button>Comprar</button>
`; */

const productos = [
    {
        titulo: 'Samsung S20',
        precio: 4000,
        id: 1,
        stock: 20
    },
    {
        titulo: 'Samsung S21',
        precio: 5000,
        id: 2,
        stock: 20
    },
    {
        titulo: 'Samsung S22',
        precio: 6000,
        id: 3,
        stock: 20
    }
]

const caja = document.getElementById('caja')


let html_productos = ''
for (let producto of productos) {
    html_productos = html_productos + `
        <div>
            <h2 class='producto_titulo'>${producto.titulo}</h2>
            <div>
                <div>Precio: <strong>$${producto.precio}</strong></div>
                <div>Stock disponible: ${producto.stock}</div>
            </div>
            <button>Comprar</button>
            <hr/>
        </div>
    `
}
caja.innerHTML = html_productos

/* 
const mensajes = [
    {
        autor: 'pepe',
        mensaje: "hola que tal!",
        fecha: '21:30',
        id: 1
    },
    {
        autor: 'Tu',
        mensaje: "Todo bien y vos?",
        fecha: '21:32',
        id: 2
    },
    {
        autor: 'pepe',
        mensaje: 'Genial!',
        fecha: '21:35',
        id: 3
    }
] */
/* 
Renderizar la lista de mensajes
<div>
    <h3>Autor</h3>
    <p>Mensaje</p>
    <span>Fecha</span>
    <hr>
</div>
*/

const mensajes = [
    {
        autor: 'pepe',
        mensaje: "hola que tal!",
        fecha: '21:30',
        id: 1
    },
    {
        autor: 'Tu',
        mensaje: "Todo bien y vos?",
        fecha: '21:32',
        id: 2
    },
    {
        autor: 'pepe',
        mensaje: 'Genial!',
        fecha: '21:35',
        id: 3
    }
]
const chatContainer = document.getElementById('chat');

let chat_html = ''
for (const mensaje of mensajes) {
    chat_html += `
        <div>
        <h3>${mensaje.autor}</h3>
        <p>${mensaje.mensaje}</p>
        <span>${mensaje.fecha}</span>
        <hr>
        </div>
    `;
}

chatContainer.innerHTML = chat_html