import React from 'react'
import './Header.css'

import deliveryman from "../../../assets/deliveryman.png"
import {FiTruck} from 'react-icons/fi';


const Header = () => {
  return (
    <div className='header section_padding'>
      <div className='header-content'>
        <h1 className='heading'>E-Commerce Solutions</h1>
        <p>Creating values for online stores and business through innovative e-commerce solutions.</p>
        <div className='input' id="container">
          <button className='trackbtn'>
            <span className='circle'>
              <FiTruck className='icon truck' color='#ffffff' />
            </span>
            <span className='button-text'>
              Track your Parcel
            </span>
          </button>
        </div>
      </div>
      <div className="image">
      <img src={deliveryman} alt="delivery" />
      </div>
    </div>
  )
}

export default Header