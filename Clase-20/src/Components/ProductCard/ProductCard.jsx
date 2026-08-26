/* 
Un componente es una funcion que retorna JSX (html)
Un componente por buenas practicas deben ser nombrados en UpperCamelCase
Para instanciar un componente usamos la sintaxis "as a component"/"como componente"
*/
function ProductCard() {
    const product = {
        title: '',
        price: 0,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aut ea repellendus. Cupiditate, dolores pariatur? Excepturi rem maiores explicabo, minus reprehenderit recusandae ratione possimus earum voluptatem nesciunt, nam, aut exercitationem!'
    }
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div>Precio: ${product.price} ARS</div>
            <button>Comprar</button>
            <hr />
        </div>
    )
}
export default ProductCard