import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'
import { Swiper } from 'swiper/react'
import Footer from './components/Footer'
import Header from './components/Header'

export const Apidata = createContext()

export function useApi(){
  return useContext(Apidata)
}

const App = () => {
  const[show, setShow] = useState(false)

  console.log("show", show)
  return (
    <Apidata.Provider value={{show, setShow}}>
    {/* <Header/> */}
    <Outlet/>
    {/* <Swiper/> */}
    <Footer/>
      
    </Apidata.Provider>
  )
}

export default App
