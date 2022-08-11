import React from 'react'
import { Navbar, Footer } from '../../components'
import {Contentus, Header, Whychooseus} from '../../pagecontainer';
import { ServicesOffer } from "../../pagecontainer/servicepage/service/Service";

const HomePage = () => {
  return (
    <div className='Homepage'>
    
        <div className='bg-white'>
          <Navbar />
          <Header />
        </div>
        <div className='bg-navy-blue'>
          <Whychooseus />
        </div>
        <Contentus />
        <ServicesOffer />
        <Footer />
    </div>
  )
}

export default HomePage