import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import Category_detail from './pages/Category_detail.jsx'
import Main_Header from './components/Main_Header.jsx'
import Detail from './pages/Detail.jsx'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children:[

      {
        index : true,
        element: <Home/>
      },
      {
        path:"cat",
        element: <Main_Header/>,
      
      children:[
        {
          index:true,
          element:<Category/>

        },
        {
          path:":cid",
          element:<Category_detail/>
        },
       
        

      ]

    },
    {
      path:"details/:id",
      element:<Detail/>,
    },
   
    
      
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
