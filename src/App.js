import React from 'react'
import './App.css'
import { HomePage, ServicePage } from './Pages'
import {Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/service' element={<ServicePage />} />
    </Routes>
    </div>
    
  )
}

export default App