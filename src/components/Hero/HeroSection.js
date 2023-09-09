import React from 'react'
import './HeroSection.scss'
import { BsArrowDown } from 'react-icons/bs'
import { IconContext } from 'react-icons'

const HeroSection = ( {heading} ) => {
  return (
    <div className='hero_heading_container'>
     <h1 className='hero_heading'>{heading}</h1>
     <IconContext.Provider value={{className:"arrow_val"}} >
      <BsArrowDown className='arrow_down' />
     </IconContext.Provider>
    </div>
  )
}

export default HeroSection