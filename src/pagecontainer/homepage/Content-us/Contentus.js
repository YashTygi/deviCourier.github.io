import React from 'react'
import './Contentus.css';
import us from "../../../assets/us.png";
import blob from "../../../assets/blob.png";

const Contentus = () => {
  return (
   <div className='section section_padding'>
    <div className='text'>
      <h1 className='header'>About Us</h1>
      <p>E com Shipping Solutions Pvt. Ltd. was incorporated in 2016 by promoters with their <span className='highlight'>20+ years of experience</span> in the express and freight industry. <br />
      Today, the company is run by a team of <span className='highlight'>200+ professionals</span> located in India and abroad, who understand the core concepts of express delivery and the critical aspects of completing them on time by meeting delivery deadlines. 
      We offer a wide bouquet of services, spanning from <span className='highlight'>Postal Networks</span>, <span className='highlight'>Door to Door International Express Delivery</span> , <span className='highlight'>Warehousing</span>, <span className='highlight'>Customs Clearance</span>, <span className='highlight'>Export advisory</span>,<span className='highlight'>Air and Sea Freight</span>  to more 2100 clients from E-Commerce Industry and general Exporters. <br />
      <br />
      <p className='extras'>With our dynamic network, we are handling more than 10000 international shipments every day, weighting anywhere between 50 gm to thousands of kgs. Averaging more than 600 tonnes every month by Means of Express Air or Air Freight mode only.
      Having our Operational Hubs at all major International Airport Locations in India (New Delhi, Mumbai, Ahmedabad, Kolkata, Bengaluru, Chennai and Hyderabad), enables us to cater the customers from any part of India. With our existence at major business and global transit hubs in the world, We can offer delivery and logistics solutions to almost all the countries in the World.</p> 
      </p>
    </div>
    
    <div className='image'>
      <img src={us} />
    </div>
   </div>
  )
}

export default Contentus