import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Product from './Pages/Product'
import Trainers from './Pages/Trainers'
import Pricing from './Pages/Pricing'
import Members from './Pages/Members'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/Product' element={<Product/>}></Route>
    <Route path='/Trainers' element={<Trainers/>}></Route>
    <Route path='/Pricing' element={<Pricing/>}> </Route>
    <Route path='/Members' element={<Members/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>

    </>
  )
}

export default App