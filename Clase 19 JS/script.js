
let productos = [
    {
        id: 1,
        titulo: 'Silla oficina',
        precio: 320000,
        stock: 10
    },
    {
        id: 2,
        titulo: 'Escritorio madera',
        precio: 120000,
        stock: 3
    },
    {
        id: 3,
        titulo: 'Alfombra roja',
        precio: 60000,
        stock: 7
    }
]
/* 
Dada una lista de productos que actuara como estado 
    -   Crear una funcion renderProducts que tomara la lista y la mostrara en pantalla
        Cada producto seguira la sig estructura:
                <div>
                    <h2>Titulo</h2>
                    <div><b>Precio:</b> $precio</div>
                    <div><b>Stock:</b> $stock</div>
                    <button>Eliminar</button>
                    <button>Editar</button>
                </div>
        Si no hay productos decir en un <p>Lista de productos vacia</p>.
        Esta funcion deberia ser invocada una vez asi renderizamos la lista de productos.

    - Crear la funcion setProductos (valor) y al llamarla cambiara el valor del estado y volvera a renderizar la lista de productos
        Para probar este setter podrian llamar a setProductos([]) y en pantalla deberian ver el parrafo indicando que la lista esta vacia
*/


//Ejemplo de ayuda de como hacer el renderProductos
const lista_productos = document.getElementById('lista-productos')

let lista_productos_string = ''
for(const producto of productos){
    lista_productos_string = lista_productos_string + `<div></div>`
}
lista_productos.innerHTML = lista_productos_string