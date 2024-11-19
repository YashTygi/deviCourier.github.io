import React from 'react'
import './Bar.scss'
import {contactinfo} from '../../Data/ContactData.js'

const Bar = () => {
  return (
    <div className='bar'>
     <p className='bar_detail'>{contactinfo.PhoneContact}</p>
     <p className='bar_detail'>{contactinfo.landlineContact}</p>
     <p className='bar_detail'>{contactinfo.emailId}</p>
    </div>
  )
}

export default Bar