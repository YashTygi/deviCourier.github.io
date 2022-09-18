import React from 'react'
import './App.css'
import { HomePage, ServicePage, AboutPage, ContactPage, SignInPage, SignUpPage } from './Pages'
import {Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<HomePage />} exact />
      <Route path='/service' element={<ServicePage />} />
      <Route path='/about-us' element={<AboutPage />} />
      <Route path='/contact-us' element={<ContactPage />} />
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
   </Routes>
    </div>
    
  )
}

export default App