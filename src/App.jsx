import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Product from './Pages/Product'
import Trainers from './Pages/Trainers'
import Pricing from './Pages/Pricing'
import Members from './Pages/Members'
import Contact from './Pages/Contact'
import Dashboard from './Pages/Dashboard'
import Users from './Pages/Users'



function App() {
  return (
    <>
   
    
    <Routes>
     <Route path='/' element={<Dashboard/>} ></Route>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Product' element={<Product/>}></Route>
    <Route path='/Trainers' element={<Trainers/>}></Route>
    <Route path='/Pricing' element={<Pricing/>}> </Route>
    <Route path='/Members' element={<Members/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Users' element={<Users/>}></Route>
    
    </Routes>

    </>
  )
}

export default App