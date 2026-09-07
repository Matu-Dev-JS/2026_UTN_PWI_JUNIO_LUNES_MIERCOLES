import React, { useEffect, useState } from 'react'
import './global.css'
import ContactsList from './Components/ContactsList/ContactsList'
import PostList from './Components/PostList/PostList'
import Counter from './Components/Counter/Counter'



export default function App() {
 
  return (
    <div>
      <PostList/>
      <Counter/>
    </div>
  )
}


