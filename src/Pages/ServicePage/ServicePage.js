import React from 'react'
import { Navbar, Footer, Banner } from '../../components'
import { Service } from '../../pagecontainer';
import serviceData from '../../serviceData.json'

function ServicePage() {
  return (
    <div>
    <div className='bg-white'>
      <Navbar />
      <Banner />
     </div>
      <Service />
      <Footer />
    </div>
  )
}

export default ServicePage