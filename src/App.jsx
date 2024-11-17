import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
import { Swiper } from 'swiper/react'

const App = () => {
  return (
    <>
    
    <Outlet/>
    <Swiper/>
    
      
    </>
  )
}

export default App
