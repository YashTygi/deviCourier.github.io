import React from 'react'
import { Navbar, Footer } from '../../components'
import {AboutUs, Feature, ContactTab} from '../../pagecontainer'

function AboutPage() {
  return (
    <div>
    <Navbar />
    <AboutUs />
    <Feature />
    <ContactTab />
    <Footer />
    </div>
  )
}

export default AboutPage