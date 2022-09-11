import React from 'react'
import './App.css'
import { HomePage, ServicePage, AboutPage, ContactPage } from './Pages'
import {Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<HomePage />} exact />
      <Route path='/service' element={<ServicePage />} />
      <Route path='/about-us' element={<AboutPage />} />
      <Route path='/contact-us' element={<ContactPage />} />
   </Routes>
    </div>
    
  )
}

export default App