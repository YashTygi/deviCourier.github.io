import React from 'react'
import { Navbar, Footer } from '../../components'
import { Service } from '../../pagecontainer';

function ServicePage() {
  return (
    <div>
    <div className='bg-white'>
      <Navbar />
     </div>
      <Service />
      <Footer />
    </div>
  )
}

export default ServicePage