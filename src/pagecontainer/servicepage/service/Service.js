import React,{ useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Service.css'
import { Getquote } from '../../../components'
import serviceData from '../../../serviceData.json'

const Service = () => {
  useEffect(() => {
    AOS.init()
  },[])

  
  return (
    
    <div className='services-container'>
      {
        serviceData.ServiceInfo.map((serve) => {
          let decide = serve.id % 2;
          return(
            
              <div className={decide === 0 ? "row" : "row-reverse"} key={serve.id}>
               <div className='service-images' data-aos={decide === 0 ? "fade-right" : "fade-left"} data-aos-duration='1000' data-aos-delay='100'>
                <img src={serve.img} />
               </div>
               <div className='service-content' data-aos={decide === 0 ? "fade-left" : "fade-right"} data-aos-duration='1000' data-aos-delay='100'> 
                <h1>{serve.serviceName}</h1>
                <p>{serve.content}</p>
               </div>
              </div>
           
          )
        })
      }
      <Getquote />
    </div>
  )
}


export const ServicesOffer = () => {
  return(
    <div className="service-tab">
    <ul className="service-tab-list">
    { serviceData.ServiceInfo.map((sdata) => {
      return(
        <li className='service-tab-info' key={sdata.id}>
          {sdata.serviceName}
        </li>
      )
    })}
    </ul>
    </div>
  )
}

export default Service 