import React, { useState } from 'react'
import './global.css'
import ProductCard from './Components/ProductCard/ProductCard'
import Message from './Components/Message/Message'


export default function App() {

  /* 
  useState es una funcion de react que te permite declarar estados
  useState recibe el valor incial de tu estado
  useState retorna un array de 2 posiciones (tupla)
    La primera posicion representa el valor del estado en si
    La segunda posicion del array representa la funcion de setteo (la funcion para actualizar el estado)

  LOS ESTADOS SON INMUTABLES, si queremos modificar/actualizar el valor de un estado debemos hacerlo mediante el setter
  */
  /* const modalAbiertoEstado = useState(false)
  const modalAbierto = modalAbiertoEstado[0]
  const setModalAbierto = modalAbiertoEstado[1] */
  const [modalAbierto, setModalAbierto] = useState(false)


  function abrirModal (){
    setModalAbierto(true)
  }

  console.log('[App.jsx] Me renderize')
  return (
    <div>
      <button onClick={abrirModal}>Abrir modal</button>
      {
        modalAbierto
        &&
        <div className='modal-container'>
          <div className='modal'>
            <h1>Hola soy un modal</h1>
            <button>Cerrar</button>
          </div>
        </div>
      }

    </div>
  )
}



const persona_1 = ['pepe', 'suarez', 50]

const [nombre, apellido, edad] = persona_1
/* const persona_nombre = persona_1[0]
const persona_apellido = persona_1[1]
const pesona_edad = persona_1[2] */