import React, { useContext } from 'react'
import { Link } from 'react-router'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { LangContext, LANGS_AVIABLES } from '../../Context/LangContext'
import LangSelect from '../../Components/LangSelect/LangSelect'

export default function HomeScreen() {
  
  return (
    <div>
      <Sidebar />
      <div className='contenido-principal'>
        
      </div>
    </div>
  )
}
