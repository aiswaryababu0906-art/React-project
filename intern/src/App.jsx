import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Product';
import Protected from './Components/Protected';
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout';

function App() {
  
  return (
      
      <Routes>

<Route path='/' element={<Home/>} />
<Route path='/Login' element ={<Login/>}/>
<Route path='/Register' element={<Register/>}/>
<Route path="/Products" element={<Protected><Products /></Protected>}/>
<Route path="/cart" element={<Protected><Cart/></Protected>} />
<Route path='/checkout' element={<Protected><Checkout/></Protected>}/>
  </Routes>    
  )
}
export default App
  


