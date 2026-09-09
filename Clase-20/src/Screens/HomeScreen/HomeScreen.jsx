import React from 'react'
import { Link } from 'react-router'

export default function HomeScreen() {
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

  const productos_jsx = []
  for (let producto of productos) {
    productos_jsx.push(
      <div key={producto.id}>
        <h2>{producto.nombre}</h2>
        <p>{producto.precio}</p>
        <Link to={`/product/${producto.id}`}>Ver detalle</Link>
        <hr/>
      </div>
      )
  }
  return (
    <div>
      <Link to={'/login'}>Iniciar sesion</Link>
      <h1>Bienvenido</h1>

      {productos_jsx}
    </div>
  )
}
