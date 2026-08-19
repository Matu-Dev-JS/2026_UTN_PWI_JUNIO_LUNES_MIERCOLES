

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

let productos_estado = [
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

function renderProductos() {
    let lista_productos_string = ''
    if (productos_estado.length === 0) {
        lista_productos_string = '<p>Lista de productos vacia</p>'
    }
    else {
        for (const producto of productos_estado) {
            lista_productos_string = lista_productos_string + `
                <h2>${producto.titulo}</h2>
                <div><b>Precio:</b> ${producto.precio}</div>
                <div><b>Stock:</b> ${producto.stock}</div>
                <button>Eliminar</button>
                <button>Editar</button>
            `
        }
    }
    lista_productos.innerHTML = lista_productos_string

}


renderProductos()


/* 
valor? : array de productos (objeto)
*/
function setProductos(valor) {
    productos_estado = valor
    renderProductos()
}


function crearProducto (titulo, precio, stock){
    const nuevo_producto = {
        id: productos_estado.length + 1,
        titulo: titulo,
        precio: precio,
        stock: stock
    }

    const productos_estado_clonado = [...productos_estado]
    productos_estado_clonado.push(nuevo_producto)

    setProductos(productos_estado_clonado)
}

//crearProducto('test', 4000, 4)


//Tipo de dato
//primitivos: string, number, boolean, undefined, null
/* let nombre_1 = 'pepe'
let nombre_2 = nombre_1

nombre_1 = 'juan'
console.log(nombre_2)


//objeto: array, objeto

const persona_1 = {nombre: 'pepe'}
const persona_2 = persona_1

persona_1.nombre = 'juan'
console.log(persona_2) */


/* const datos = {
    x: 0,
    y: 0
}

const datos_previo = {...datos}

datos.x = 120
datos.y = 120

const historial = {
    previo: datos_previo,
    actualizado: datos
}
console.log(historial) */


/* 
Crear una funcion llamada eliminarProductoPorId
    Recibira un id y modificara el estado (mediante el setter) para eliminar el producto con el id recibido, sino existe devolvera null.
*/


function eliminarProductoPorId (producto_id){
    const productos_estado_clonado = [...productos_estado]
    let producto_indice = null
    for(const producto of productos_estado_clonado){
        if(producto.id === producto_id){
            producto_indice = productos_estado_clonado.indexOf(producto)
            productos_estado_clonado.splice(producto_indice, 1)
            setProductos(productos_estado_clonado)
            return true
        }
    }
    return null
}

/* 
const nombres = [{nombre: 'pepe'}, {nombre: 'juan'}, {nombre: 'maria'}]

let indice_juan

for(const persona of nombres){
    if(persona.nombre === 'juan'){
        indice_juan = nombres.indexOf(persona)
    }

}

nombres.splice(indice_juan, 1)

console.log(nombres) */