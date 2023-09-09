import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import {FiTruck} from 'react-icons/fi';


const Header = () => {
  return (
    <div className='header section_padding'>
     <div className='blob'></div>
      <div className='header-content'>
        <h1 className='heading'>Delivering <br/> Your Promises</h1>
        <p>Reliable delivery for documents, parcels, and more. Your promises, our priority. </p>
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
        <div class="testimonial">
    <p className='testimonial-text'>"Devi Courier has been an absolute game-changer for our business. Their prompt and secure delivery services have allowed us to meet tight deadlines and exceed customer expectations. With their professionalism and attention to detail, they've earned our trust as a reliable partner in our growth journey."</p>
    <p className='testimonial-author'>— Jessica Martin, CEO, 
    TechHaven Solutions</p>
    </div>
      </div>
      <div class="header-img-grid">
  <div class="photo photo1"></div>
  <div class="photo photo2"></div>
  <div class="photo photo3"></div>
  <div class="photo photo4"></div>
  <div class="photo photo5"></div>
  
</div>

    </div>
  )
}

export default Header