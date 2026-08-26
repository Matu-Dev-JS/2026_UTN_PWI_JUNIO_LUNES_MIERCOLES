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
      <ProductCard 
        title={"Tv Samsung 32\""}
        price={300000}
        description={"Tv Samsung 32\" con resolucion Full HD"}
        id='1'
      /> 
      <ProductCard 
        title={"Tv samsung 42\""}
        price={400000}
        description={"Tv Samsung 42\" con resolucion Full HD"}
      /> 
      <ProductCard 
        title={"Tv samsung 52\""} 
        price={600000}
        description={"Tv Samsung 52\" con resolucion Full HD"}
      /> 
    </div>
  )
}

