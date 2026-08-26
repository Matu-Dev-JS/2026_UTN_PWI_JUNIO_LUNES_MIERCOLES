import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'


export default function App() {

  let precio = 40000
  return (
    <div>
      <h1>Hola mundo!</h1>
      <a>Click aqui</a>
      <div>
        El valor del iva de ${precio} ARS es ${precio * 0.21} ARS
      </div>
      {/* instancia del componente PorductCard, a esto le decimos llamarlo "as a component" */}
      <ProductCard/> 
      <ProductCard/> 
      <ProductCard/> 
    </div>
  )
}

