import React from 'react'
import { Navbar, Footer, Bar, ContactForm } from '../../components'
import {Contentus, Header, Whychooseus, ContactTab, Service} from '../../pagecontainer';
import { ServicesTab } from "../../pagecontainer/servicepage/service/Service";
import ContactWindow from '../../components/ContactWindow/ContactWindow.js';

const HomePage = () => {
  return (
    <div className='Homepage'>
        <Bar />
        <Navbar />
        <Header />
        <Contentus />
        <Service />
        <div className='centre'>
        <ContactForm />
        </div>
        <Footer />

    </div>
  )
}

export default HomePage