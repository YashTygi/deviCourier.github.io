import React from 'react'
import './ContactTab.scss'
import {Link} from 'react-router-dom'
import {default as contacttab} from '../../../assets/contact-tab.jpg'

function ContactTab() {
  return (
    <div className='contact-tab'>
    <img alt='courier' src={contacttab} />
     <div className='contact-tab-content'>
       <h1>Want to know more ? Get in touch <br /> with us</h1>
       <button className='contact-tab-contact'><Link to='/contact-us'>Contact Us</Link></button>
     </div>
    </div>
  )
}

export default ContactTab