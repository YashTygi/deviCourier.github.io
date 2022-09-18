import React, { useEffect, useRef } from 'react';
import './Whychooseus.scss';
import cardData from '../../../Data/whyChooseUsData.json'
import whyus from '../../../assets/whyus.jpg'
const Whychooseus = () => {

  return (
    <div className='wcu'>
    <p className='wcu-heading'>Whats So Unique About Us ?</p>
    <div className='wcu-container'>
    <img src={whyus} alt='why-Choose-Us' />
    <div className='container'>
    {cardData.data.map((cdata) => {
      return(
       <div className="card" key={cdata.id}>
        <span><p>{cdata.id}</p></span>
        <p>{cdata.text}</p>
       </div>
      )
    })}
    </div>
    </div>
    </div>
  )
}

export default Whychooseus