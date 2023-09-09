import React from 'react'
import { Navbar, Footer, HeroSection, Bar, ContactForm } from '../../components'
import { Service } from '../../pagecontainer';

function ServicePage() {
  return (
    <div>
    <Bar />
      <Navbar />
      <HeroSection heading={"Your Route to Dependable Delivery Solutions"} />
      <Service />
      <div className='centre'>
      <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default ServicePage