import React from 'react'
import { useParams } from 'react-router'

export default function ProductDetailScreen() {

  const productos = [
    {
      nombre: 'tv samsung 32"',
      id: 1,
      precio: 2000
    },
    {
      nombre: 'tv samsung 43"',
      id: 2,
      precio: 3000
    },
    {
      nombre: 'tv samsung 50"',
      id: 3,
      precio: 4000
    }
  ]
  /* 
  useParams es un hook de react router que permite extraer un valor variable de la url

  ejemplo si tu ruta es:
    Declarada: /contact/:contact_id
    Ruta real: /contact/1
    useParams devuelve un {contact_id: "1"}
  */
  const {product_id} = useParams()
  console.log("Estamos en el producto con id: " + product_id)

  let producto_seleccionado = null

  for(const producto of productos){
    if(producto.id === Number(product_id)){
      producto_seleccionado = producto
    }
  }

  if(!producto_seleccionado){
    return (
      <h1>El producto que buscas no existe!</h1>
    )
  }
  return (
    <div>
        <h1>Detalle del producto: {producto_seleccionado.nombre}</h1>
        <div>Precio: ${producto_seleccionado.precio} ARS</div>
    </div>
  )
}
