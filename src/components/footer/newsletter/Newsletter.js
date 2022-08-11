import React from 'react'
import './newsletter.css'

function newsletter() {
  return (
    <div className='nws-tab'>
      <div className='nws-box'>
        <h1 className='nws-heading'>Subscribe to our newsletter</h1>
        <p className='nws-sub'>Sign up today for tips, latest news and exclusive offers.</p>
        <div classname='nws-input-block'>
          <input type='email' placeholder='Enter Your E-mail' className='nws-input' />
         <button type='button' className='nws-btn'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default newsletter