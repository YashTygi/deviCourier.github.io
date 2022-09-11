import React from 'react'
import './contact.scss'
import {Link} from 'react-router-dom';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {default as ContactForm} from './ContactForm/ContactForm'

function Contact() {

  const cdata = require('../../contactVital.json')

  return (
    <div className='contacts'>
    <Link to='/'><span><BsFillArrowLeftCircleFill className='leftarrow' />Go back to Home Page</span></Link>
    <div className='contacts-form'>
    <div className='getintouch'>
     <h1>Get In Touch</h1>
        <h2>Call Us</h2>
         <p>{cdata.landlineContact}</p>
        <h2>Email Us</h2>
        <p>{cdata.emailId}</p>
        <h2>Reach Us</h2>
        <p>{cdata.address}</p>
      </div>
      <ContactForm />
    </div>
    </div>
  )
}

export default Contact