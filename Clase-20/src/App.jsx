import React, { useState } from 'react'
import './global.css'
import ContactsList from './Components/ContactsList/ContactsList'



export default function App() {

  const mensajes_servidor = [
    {
      id: 1,
      autor: 'Jose',
      contenido: 'Hola!!',
      fecha: '26 agosto 2026 11:45'
    },
    {
      id: 2,
      autor: 'Maria',
      contenido: 'Todo bien?! 😎',
      fecha: '26 agosto 2026 11:55'
    },
    {
      id: 3,
      autor: 'Pedro',
      contenido: 'Que cuentan?',
      fecha: '26 agosto 2026 11:56'
    }

  ]
  /* 
  En react tenemos listas de JSX
  Las listas de JSX son arrays donde cada elemento tiene un expresion JSX
  Las listas JSX se renderizan directamente en pantalla de forma ordenada
  */
  const mensajes_jsx = []

  for (const mensaje of mensajes_servidor) {
    mensajes_jsx.push(
      <div key={mensaje.id}>
        <h2>{mensaje.autor}</h2>
        <p>{mensaje.contenido}</p>
        <span>Fecha: {mensaje.fecha}</span>
        <hr />
      </div>
    )
  }



  return (
    <div>
      {mensajes_jsx}
      <ContactsList/>
    </div>
  )
}

/* 
Contactos:
[
  {
    id: 1
    nombre: 'Marcos',
    ultimo_mensaje: 'hay que juntarnos!..',
    imagen: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250",
    mensajes_sin_leer: 2,
    fecha_ultimo_mensaje: "12/2/2023 14:30"
  },
  ...sigan completando con almenos 3 contactos
]

Renderizar la lista de contactos
No es necesario hacer estilos
Ejemplo: https://user-images.githubusercontent.com/44744039/224526440-b4eb6a54-4dda-430c-a681-286f5b406fe7.png
*/