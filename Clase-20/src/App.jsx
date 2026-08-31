import React from 'react'
import './global.css'
import ProductCard from './Components/ProductCard/ProductCard'
import Message from './Components/Message/Message'


export default function App() {

  let precio = 40000
  return (
    <div>
      <div className='product-card'>
        hola mundo
      </div>
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
        isOnlyForMembers={true}
        id='1'
      />
      <ProductCard
        title={"Tv samsung 42\""}
        price={40}
        description={"Tv Samsung 42\" con resolucion Full HD"}
        isOnlyForMembers={false}
      />
      <ProductCard
        title={"Tv samsung 52\""}
        price={600000}
        description={"Tv Samsung 52\" con resolucion Full HD"}
        isOnlyForMembers={true}
      />
      <div className="pantalla-chat">


        <Message
          autor={"Yo"}
          contenido={"Hello, i was wondering when my order will be shipped?"}
          fecha={"1:30 PM"}
          estatus_envio={"visto"}
        />
        <Message
          autor={"Maria"}
          contenido={"Your order has been processed and we are preparing..."}
          fecha={"1:32 PM"}
          estatus_envio={"enviado"}
        />
        <Message
          autor={"Yo"}
          contenido={"Thank you"}
          fecha={"1:32 PM"}
          estatus_envio={"visto"}
        />
        <Message
          autor={"Maria"}
          contenido={"Your order has been shipped and is spected to be..."}
          fecha={"12:00 PM"}
          estatus_envio={"enviado"}
        />
      </div>
    </div>
  )
}

