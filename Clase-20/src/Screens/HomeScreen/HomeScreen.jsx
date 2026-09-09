import React from 'react'
import { Link } from 'react-router'

export default function HomeScreen() {
  return (
    <div>
        <Link to={'/login'}>Iniciar sesion</Link>
        <h1>Bienvenido</h1>
    </div>
  )
}
