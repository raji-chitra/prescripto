import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home' 
import About from './pages/About'
import Contact from './pages/contact'
import Login from './pages/Login'
import Myprofile from './pages/Myprofile'
import MyAppointments from './pages/MyAppointments'
import Doctors from './pages/Doctors' 
import
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/myappointments' element={<MyAppointments />} />
      </Routes>
    </div>
  )
}

export default App