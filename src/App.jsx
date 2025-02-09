import React, { createContext, useContext, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Home from './pages/Home'
import { Swiper } from 'swiper/react'
import Footer from './components/Footer'
import Header from './components/Header'
import axios from 'axios'

export const Apidata = createContext()

export function useApi(){
  return useContext(Apidata)
}

const App = () => {
  let {cid}=useParams();
  const[show, setShow] = useState(false)
  const [data, setData] = useState([])

  const fetchApi = async()=>{
    try{
      const res = await axios.get( `/api/movies?genre=${cid}`)
      setData(res.data.results)

    }
    catch(error){
      console.log("error", error)
    }
  }



  useEffect(()=>{
    fetchApi()
  },[])

  console.log("show", show)
  console.log("data", data)
  return (
    <Apidata.Provider value={{show, setShow, data}}>

      {/* {data.map((item, index)=>{
        return(
          <div key="index">
          {item.budget}
          </div>
        )
      })} */}
    {/* <Header/> */}
    <Outlet/>
    {/* <Swiper/> */}
    <Footer/>
      
    </Apidata.Provider>
  )
}

export default App
