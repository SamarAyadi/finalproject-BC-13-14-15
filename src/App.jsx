import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';

let x = createBrowserRouter([
    {path: '', element: <Layout />, children:[
        {index: true, element: <Home/>},
        {path:'categories', element:<Categories />},
        {path:'brands', element:<Brands />},
        {path:'cart', element:<Cart />},
        {path:'products', element:<Products />},
        {path:'login', element:<Login />},
        {path:'register', element:<Register />},
        {path:'*', element:<Notfound />},
    ]}
])

function App() {
  const [count, setCount] = useState(0)

  return (
<RouterProvider router={x}></RouterProvider>
  )
}

export default App
