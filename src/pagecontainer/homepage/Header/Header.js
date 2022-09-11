import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import {FiTruck} from 'react-icons/fi';


const Header = () => {
  return (
    <div className='header section_padding'>
      <div className='header-content'>
        <h1 className='heading'>Shipping Your Emotions</h1>
        <p>Creating values for online stores and business through innovative e-commerce solutions.</p>
        <div className='input' id="container">
        <Link to='/contact-us'>
          <button className='trackbtn'>
            <span className='circle'>
              <FiTruck className='icon truck' color='#ffffff' />
            </span>
            <span className='button-text'>
              Get In Touch
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header