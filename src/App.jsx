import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'
import { Swiper } from 'swiper/react'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    
    <Outlet/>
    {/* <Swiper/> */}
    <Footer/>
      
    </>
  )
}

export default App
