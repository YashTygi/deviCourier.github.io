import React from 'react'
import './SignInPage.scss'


function SignInPage() {
  return (
    <>
    <div className='sign-in-container'>
    <form>
    <div className='sign-in-form'>
    <h1>Sign In</h1>
      <div className='sign-in-input'>
       <input 
        type="email"
        name="email"
        placeholder="Email"
       />
      </div>
      <div className='sign-in-input'>
       <input 
        type="password"
        name="password"
        placeholder="Password"
       />
      </div>
      <button className='sign-in-button'>Submit</button>
     </div>
    </form>
    </div>
    </>
  )
}

export default SignInPage