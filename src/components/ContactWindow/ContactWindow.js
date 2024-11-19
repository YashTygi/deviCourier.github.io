import React from 'react'
import './ContactWindow.scss'
import ContactForm from '../ContactForm/ContactForm'
import {contactinfo} from '../../Data/ContactData.js'



const ContactWindow = () => {
  return (
    <div className='contact-window'>
    
    <div className='Contacts-section-window'>
    
    <div className='drop-us-a-line'>
    <h1>Drop Us A Line</h1>
    <p>{contactinfo.PhoneContact}</p>
    <p>{contactinfo.landlineContact}</p>
    <p>{contactinfo.emailId}</p>
    </div>
    
    <div className='connect-to-socials'>
    <h1>Connect to Socials</h1>
    <a href={contactinfo.instagramId}>Instagram</a>
    <a href={contactinfo.twitterHandle}>Twitter</a>
    <a href={contactinfo.facebookAddress}>Facebook</a>
    </div>
    
    </div>
    
    <ContactForm/>
    </div>
  )
}

export default ContactWindow