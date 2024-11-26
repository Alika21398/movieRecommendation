import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'
import { Swiper } from 'swiper/react'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    {/* <Swiper/> */}
    <Footer/>
      
    </>
  )
}

export default App
