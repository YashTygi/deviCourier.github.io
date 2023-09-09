import React from 'react'
import './ContactWindow.scss'
import ContactForm from '../ContactForm/ContactForm'

const ContactWindow = () => {
  return (
    <div className='contact-window'>
    
    <div className='Contacts-section-window'>
    
    <div className='drop-us-a-line'>
    <h1>Drop Us A Line</h1>
    <p>+91-9943587143</p>
    <p>+91-9943587143</p>
    <p>devi@gmail.com</p>
    </div>
    
    <div className='connect-to-socials'>
    <h1>Connect to Socials</h1>
    <a href='#'>Instagram</a>
    <a href='#'>Twitter</a>
    <a href='#'>Facebook</a>
    </div>
    
    </div>
    
    <ContactForm/>
    </div>
  )
}

export default ContactWindow