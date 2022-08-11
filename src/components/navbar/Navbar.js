import React, {useState,useEffect} from 'react'
import "./Navbar.css"
import DropDown from './DropDown';
import logo from '../../assets/logo.png';
import AOS from 'aos';
import {Link} from 'react-router-dom';
import { CgMenu,CgClose } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';


const Navbar = () => {

  useEffect(() => {
    AOS.init()
  },[])

  const [login, setLogin] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [shadow, setShadow] = useState(false);
  const shadowActive = () => {
    if (window.scrollY >= 100) {
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
            <p className='logo-title' data-aos="fade" data-aos-duration="400" data-aos-delay='50' data-aos-easing='ease-in-out-quad'><Link to='/'>Devi Courier</Link></p>
          </div>
          <div className='navbar_link_list'>

          <p className='link'><Link to='/'>Home</Link></p>

          <p className='link'>
            <Link to='/service'>
              Services<IoMdArrowDropdown/>
              
            </Link>
          </p>

          <p className='link'><Link to='/track'>Tracking</Link></p>

          <p className='link'>
            <Link to='/feature'>
              Feature<IoMdArrowDropdown/>
            </Link>
          </p>

          <p className='link'>
            <Link to='/contactUs'>
              Contact us<IoMdArrowDropdown/>
            </Link>
          </p>

          <p className='link'><Link to='/career'>Career</Link></p>
          </div>  
        <div className='small-nav'>
         <div className='navbar_get_quote'>
            <button className='btn'>
              <p>{login ? "Get Quote" : "Sign up"}</p>
            </button>
            <button className={login ? 'null' : 'btn-login'}>
              <p className='btn-login-p'>Login</p>
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
                <p className='link'><Link to='/service'>Services<IoMdArrowDropdown/></Link></p>
                <p className='link'><Link to='/track'>Tracking</Link></p>
                <p className='link'><Link to='/feature'>Feature<IoMdArrowDropdown/></Link></p>
                <p className='link'><Link to='/contactUs'>Contact us<IoMdArrowDropdown/></Link></p>
                <p className='link'><Link to='/career'>Career</Link></p>
                </div>
                <div className='menu_button'>
                  <button className='btn-menu'>
                    <p>{login ? "Get Quote" : "Sign up"}</p>
                  </button>
                  <button className={login ? 'null' : 'btn-login'}>
                    <p>Login</p>
                  </button>
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