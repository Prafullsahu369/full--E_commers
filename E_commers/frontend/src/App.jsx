import React from 'react'
import Home from './Pages/Home.jsx'
import { Routes,Route } from 'react-router-dom'
import Collections from './Pages/Collections.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Orders from './Pages/Orders.jsx'
import PlaceOrders from './Pages/PlaceOrders.jsx'
import Login from './Pages/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Verify from './Pages/Verify.jsx'

const App = () => {
  return (
<>
<div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  '>
  <ToastContainer/>
  <Navbar/>
  <SearchBar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/collections' element={<Collections/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/product/:productId' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/place-order' element={<PlaceOrders/>}/>
  <Route path='/orders' element={<Orders/>}/>
  <Route path='/verify' element={<Verify/>}/>
</Routes>
<Footer/>
</div>
</>
  )
}

export default App