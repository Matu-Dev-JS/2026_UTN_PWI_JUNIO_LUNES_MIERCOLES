import React, { useEffect, useState } from 'react'
import './global.css'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import NotFoundScreen from './Screens/NorFoundScreen/NotFoundScreen'



export default function App() {
 
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/home' element={<HomeScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='*' element={<NotFoundScreen/>} />
    </Routes>
  )
}


