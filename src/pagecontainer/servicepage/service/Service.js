import React,{ useEffect } from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Service.scss'
import service from '../../../assets/services.jpg'
import serviceData from '../../../Data/serviceData.json'

const Service = () => {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className='services-container'>
    <p className='services-head'>Our Services</p>
      {
        serviceData.ServiceInfo.map((serve) => {
          let decide = serve.id % 2;
          return(
              <div className={decide === 0 ? "row" : "row-reverse"} key={serve.id}>
               <div className='service-images' data-aos="fade-up" data-aos-duration='500' data-aos-delay='50'>
                <img src={serve.img} alt='services-we-offer'/>
               </div>
               <div className='service-content' data-aos="fade-up" data-aos-duration='500' data-aos-delay='150'> 
                <h1>{serve.serviceName}</h1>
                <p>{serve.content}</p>
               </div>
              </div>
          )
        })
      }
    </div>
    
  )
}


export const ServicesTab = () => {
  return(
    <div className="service-tab">
    <div className="service-tab-left">
     <h1>Know more about the services, we offer for your hassle-free delivery</h1> 
     <Link to='/service'><button className='viewservices'>View Services</button></Link>
    </div>
    <img src={service} alt="services" />
    </div>
  )
}

export default Service 