import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import "./Footer.scss"
import logo from "../../assets/logo.png"

const Footer = () => {

  return (
    <div className='footer'>

        <div className='navbar_logo'>
            <img src={logo} alt='logo' />
            <p className='logo-title'>
             <Link to='/'>Devi Courier</Link>
            </p>
          </div>
          <p>Empowering Connections through Reliable Deliveries. Devi Courier: Trust, Professionalism, and Your Bridge to Seamless Service.</p>
          
         <div className='nav-section'>
         <p className='link'><Link to='/about-us'>About Us</Link></p>
         <p className='link'><Link to='/service'>Services</Link></p>
         <p className='link'><Link to='/contact-us'>Contact us</Link></p>
         </div>


         
      <div className='copyright-section'>
        <p>Copyright @ 2022 <Link to='/'><a href='#'>Devi Courier</a></Link></p>
      </div>
    </div>
  )
}

export default Footer