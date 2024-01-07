import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing'
import ProductDetails from './pages/ProductDetails'
import Breadcrumbs from './components/Breadcrumbs'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h3 border="1">Mob Store</h3>
        <Breadcrumbs />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
