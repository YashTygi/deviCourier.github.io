import React, { useEffect, useRef } from 'react';
import './Whychooseus.css';
import Support from './Card/24hrSupport/24hrSupport.js'
import CarefulHandling from './Card/CarefulHandling/CarefulHandling';
import GlobalSupplyChain from './Card/GlobalSupplyChain/GlobalSupplyChain'
import MobilityShipmentTracking from './Card/MobilityShipmentTracking/MobilityShipmentTracking';
import OnTimeDelivery from './Card/OntimeDelivery/OnTimeDelivery';


const Whychooseus = () => {

  return (
    <div className='bg-navy-blue'>
    <p className='Whychooseus'>Whats So Unique About Us</p>
    <div className='container'>
      <Support /> 
      <CarefulHandling />  
      <GlobalSupplyChain />
      <MobilityShipmentTracking />
      <OnTimeDelivery />
    </div>
    </div>
  )
}

export default Whychooseus