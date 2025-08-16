import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home' 
// ...existing code...
import Contact from './pages/Contact'
import Login from './pages/Login'
import Myprofile from './pages/Myprofile'
import MyAppointments from './pages/MyAppointments'
import Doctors from './pages/Doctors' 
import About from './pages/About'
import Appointment from './pages/Appointment'


import { Navbar } from './components/Navbar'
// ...existing code...
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-profile' element={<Myprofile />} />
        <Route path='/my-appointments' element={<MyAppointments />} /> 
         <Route path='/appointment/:docId' element={<Appointment/>} />
      </Routes>
    </div>
  )
}

export default App