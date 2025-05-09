import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Produc from './Pages/Product'
import Trainers from './Pages/Trainers'
import Princing from './Pages/pricing'
import Members from './Pages/Members'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/Product' element={<Produc/>}></Route>
    <Route path='/Trainers' element={<Trainers/>}></Route>
    <Route path='/pricing' element={<Princing/>}> </Route>
    <Route path='/Members' element={<Members/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>

    </>
  )
}

export default App