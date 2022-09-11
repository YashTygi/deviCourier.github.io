import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import "./Footer.scss"
import logo from "../../assets/logo.png"
import { GrMapLocation, GrPhone, GrFormClock, GrMail } from 'react-icons/gr'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const cdata = require('../../contactVital.json')

  return (
    <div className='footer section-padding'>
        <div className='self-section'>
        <div className='navbar_logo'>
            <img src={logo} alt='logo' />
            <p className='logo-title'>
             <Link to='/'>Devi Courier</Link>
            </p>
          </div>
          <p><Link to='/' className='focus'>Devi Courier</Link> is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.</p>
          <div className='social-section'>
            <a href={cdata.facebookAddress}><FaFacebookF color='#fff' /></a>
            <a href={cdata.twitterHandle}><FaTwitter color='#fff' /></a>
            <a href={cdata.instagramId}><FaInstagram color='#fff' /></a>
            <a href={cdata.linkedinAccount}><FaLinkedin color='#fff' /></a>
         </div>
         <div className='nav-section'>
         <p className='link'><Link to='/'>Home</Link></p>
         <p className='link'><Link to='/about-us'>About Us</Link></p>
         <p className='link'><Link to='/service'>Services</Link></p>
         <p className='link'><Link to='/contact-us'>Contact us</Link></p>
         </div>
         </div>

         
      <div className='copyright-section'>
        <p>Copyright @ 2022 <Link to='/'><a href='#'>Devi Courier</a></Link></p>
      </div>
    </div>
  )
}

export default Footer