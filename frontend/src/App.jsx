import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/collection'
import Product from './pages/Product'
import { ToastContainer } from "react-toastify"
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Blog from './components/Blog'

const App = () => {
  return (
    <main className='overflow-hidden text-[#222529]'>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />

      </Routes>

    </main>
  )
}

export default App