import React from 'react'
import { Navbar, Footer, HeroSection, Bar, ContactForm } from '../../components'
import {AboutUs, Feature, ContactTab} from '../../pagecontainer'

function AboutPage() {
  return (
    <div>
    <Bar />
    <Navbar />
    <HeroSection heading={"We're More Than Couriers, We're Your Delivery Allies"} />
    <AboutUs />
    <div className='centre'>
    <ContactForm />
    </div>
    <Footer />
    </div>
  )
}

export default AboutPage