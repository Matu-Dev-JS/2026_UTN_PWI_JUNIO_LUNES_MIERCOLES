/* 
Un componente es una funcion que retorna JSX (html)
Un componente por buenas practicas deben ser nombrados en UpperCamelCase
Para instanciar un componente usamos la sintaxis "as a component"/"como componente"
Para poder trasmitir informacion a un componente un padre puede dar informacion al componente mediante las props
Estas props siempre seran un objeto
*/

/* 
title (obligatoria)
price (obligatoria)
description (obligatoria)
*/
function ProductCard(propiedades) {
    console.log("propiedades de product card son:", propiedades)

    
    return (
        <div>
            <h2>{propiedades.title}</h2>
            <p>{propiedades.description}</p>
            <div>Precio: ${propiedades.price} ARS</div>
            <button>Comprar</button>
            <hr />
        </div>
    )
}
export default ProductCard


//Declaracion
//En la declaracion determinamos que valores vamos a recibir (parametros)
function sumar (a, b){
    return a + b
}

//invocacion
sumar(1, 1)
sumar(2, 2)