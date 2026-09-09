import React, { useEffect, useState } from 'react'
import './global.css'
import ContactsList from './Components/ContactsList/ContactsList'
import PostList from './Components/PostList/PostList'
import Counter from './Components/Counter/Counter'
import LoginForm from './Components/LoginForm/LoginForm'
import Message from './Components/Message/Message'



export default function App() {
 
  return (
    <div>
      <LoginForm/>

      <Message 
        estatus_envio={'visto'} 
        autor={'jeremias'} 
        contenido={'hola!!'} 
        fecha={'hoy'}
      />
    </div>
  )
}


