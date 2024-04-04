import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Home, Login, Register, Error, Logout, Cart, Order, Products} from './pages/pages.js'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'',
        element: <Home/>,
      },
      {
        path:'cart',
        element: <Cart/>,
      },
      {
        path:'order',
        element: <Order/>,
      },
      {
        path:'products',
        element: <Products/>,
      },
      {
        path:'login',
        element: <Login/>,
      },
      {
        path:'register',
        element: <Register/>,
      },
      {
        path:'logout',
        element: <Logout/>,
      },
      {
        path:'*',
        element:<Error/>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
