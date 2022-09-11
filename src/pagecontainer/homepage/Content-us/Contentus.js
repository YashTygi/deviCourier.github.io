import React from 'react'
import {Link} from 'react-router-dom'
import './Contentus.scss';
import us from "../../../assets/us.jpg";

const Contentus = () => {

  return (
   <div className='section section_padding'>
    <div className='text'>
      <h1>About Us</h1>
      <p>E com Shipping Solutions Pvt. Ltd. was incorporated in 2016 by promoters with their <span className='highlight'>20+ years of experience</span> in the express and freight industry. <br />
      Today, the company is run by a team of <span className='highlight'>200+ professionals</span> located in India and abroad, who understand the core concepts of express delivery and the critical aspects of completing them on time by meeting delivery deadlines. 
      We offer a wide bouquet of services, spanning from <span className='highlight'>Postal Networks</span>, <span className='highlight'>Door to Door International Express Delivery</span> , <span className='highlight'>Warehousing</span>, <span className='highlight'>Customs Clearance</span>, <span className='highlight'>Export advisory</span>,<span className='highlight'>Air and Sea Freight</span>  to more 2100 clients from E-Commerce Industry and general Exporters. <br />
      </p>
      <Link to='/about-us'>
      <button className="show-btn">Read More</button>
      </Link>
    </div>
    
    <div className='image'>
      <img src={us} />
    </div>
   </div>
  )
}

export default Contentus