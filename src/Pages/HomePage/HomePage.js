import React from 'react'
import { Navbar, Footer } from '../../components'
import {Contentus, Header, Whychooseus, ContactTab} from '../../pagecontainer';
import { ServicesTab } from "../../pagecontainer/servicepage/service/Service";

const HomePage = () => {
  return (
    <div className='Homepage'>
    
        <div className='bg-white'>
        <Navbar />
        <Header />
        </div>
        <Contentus />
        <Whychooseus />
        <ServicesTab />
        <ContactTab />
        <Footer />
    </div>
  )
}

export default HomePage