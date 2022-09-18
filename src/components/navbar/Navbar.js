import React, {useState} from 'react'
import "./Navbar.scss"
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import { CgMenu,CgClose } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [shadow, setShadow] = useState(false);
  const shadowActive = () => {
    if (window.scrollY >= 5) {
      setShadow(true);
    } else {
      setShadow (false);
    }
  };
  window.addEventListener('scroll', shadowActive);

  return (
      <nav className={shadow ? 'navbar shadow': 'navbar'}>
        <div className='navbar_links'>
          <div className='navbar_logo'>
            <img src={logo} alt='logo' />
            <p className='logo-title'>
             <Link to='/'>Devi Courier</Link>
            </p>
          </div>
          <div className='navbar_link_list'>

          <p className='link'><Link to='/'>Home</Link></p>
          <p className='link'><Link to='/about-us'>About Us</Link></p>
          <p className='link'><Link to='/service'>Services</Link></p>
          <p className='link'><Link to='/contact-us'>Contact us</Link></p>
          </div>  
        <div className='side-nav'>
         <div className='navbar_contact'>
            <button className='btn-in'>
              <Link to='/sign-up'><p>Sign Up</p></Link>
            </button>
            <button className='btn-up'>
              <Link to='/sign-in'><p>Sign In</p></Link>
            </button>
          </div>
          <div className='menu' onClick={handleClick}>
            {click
              ? <CgClose color='#057DCD' size={25}  />
              : <CgMenu color='#057DCD' size={25}  />
            }
            {click &&
              <div className='menu-container scale-up-center'>
                <div className='menu_link_list'>
                <p className='link'><Link to='/'>Home</Link></p>
                <p className='link'><Link to='/about-us'>About Us</Link></p>
                <p className='link'><Link to='/service'>Services</Link></p>
                <p className='link'><Link to='/contact-us'>Contact us</Link></p>
                </div>
              </div>
            }
          </div>
        </div>
        </div>
      </nav>

  )
}

export default Navbar