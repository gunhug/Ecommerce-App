import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/collection'
import Blog from './pages/Blog'
import Product from './pages/Product'

const App = () => {
  return (
    <main className=''>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>

    </main>
  )
}

export default App