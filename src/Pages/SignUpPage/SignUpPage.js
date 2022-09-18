import React from 'react'
import '../SignInPage/SignInPage.scss'


function SignInPage() {
  return (
    <>
    
    <div className='sign-container'>
    <form>
    <div className='sign-form'>
    <h1>Sign Up</h1>
      <div className='sign-input'>
       <input 
        type='name' 
        name='name' 
        placeholder='Enter Your Name '/>
      </div>
      <div className='sign-input'>
       <input 
        type="email"
        name="email"
        placeholder="Enter Your Email"
       />
      </div>
      <div className='sign-input'>
       <input 
        type="password"
        name="password"
        placeholder="Enter Password"
       />
      </div>
      <div className='sign-input'>
       <input 
        type="confirmpassword"
        name="confirmpassword"
        placeholder="Confirm Password"
       />
      </div>
      <button className='sign-button'>Submit</button>
     </div>
    </form>
    </div>
    </>
  )
}

export default SignInPage