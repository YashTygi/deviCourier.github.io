import React, { useState } from 'react'
import "./Footer.css"
import Newsletter from './newsletter/Newsletter'
import logo from "../../assets/logo.png"
import { GrMapLocation, GrPhone, GrFormClock, GrMail } from 'react-icons/gr'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import contactData from "../../contactVital.json"
import serviceData from '../../serviceData.json'




const Footer = () => {
  
  
  const data = require('../../contactVital.json')

  const ServiceOffered = () => {
      return (
        <div className='service-section'>
         <p>Services</p>
           <ul className='services-list'>
            {
              serviceData.ServiceInfo.map((name) => {
                return (
                  <li>{name.serviceName}</li>
                )
              })            
            }
           </ul>
        </div>
      )
    
  }

  

  return (
    <div className='footer'>
      <Newsletter /> 

      <div className='footer-section section-padding'>
    
        <div className='self-section'>
          <p><span className='focus'>Devi Courier</span> is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.</p>
        
          <div className='social-section'>
          <span className='facebook'>
            <a href={data[0].facebookAddress}><FaFacebookF color='#fff' /></a>
          </span>
          <span className='twitter'>
            <a href={data[0].twitterHandle}><FaTwitter color='#fff' /></a>
          </span>
          <span className='instagram'>
          <a href={data[0].instagramId}><FaInstagram color='#fff' /></a>
          </span>
          <span className='linkedin'>
          <a href={data[0].linkedinAccount}><FaLinkedin color='#fff' /></a>
          </span>
        </div>
        </div>
        
        <ServiceOffered />

        <div className='feature-section'>
         <p>Features</p>
          <ul className='features-list'>
            <li>Know Your Customer(KYC)</li>
            <li>Metric Conversion</li>
            <li>World Time</li>
            <li>World Weather</li>
            <li>Industry Exchange</li>
          </ul>
        </div>
       
        <div className='contact-section'>
         <p className='contact-heading'>Contact Us</p>
          <ul className='contact-links'>
           <li>
             <GrMapLocation color='#fff' />
             <p>Address: <br /> <span className='focus'>{data[0].address}</span></p>
           </li>
           <li>
             <GrPhone color='#fff' />
             <p>Landline: <br /> <span className='focus'>{data[0].landlineContact}</span></p>
           </li>
           <li> 
             <GrFormClock color='#fff' />
             <p>Opening Hours: <br /> <span className='focus'>{data[0].timings}</span></p>
            </li>
            <li>
              <GrMail color='#fff' />
              <p><span className='focus'>{data[0].emailId}</span></p>
            </li>
          </ul>
        </div>
     
      </div>
      <div className='copyright-section'>
        <p>Copyright @ 2022 <a href='#'>Devi Courier</a>, All Right Reserved</p>
        <a href='#'>Terms and Condition</a>
      </div>
    </div>
  )
}

export default Footer