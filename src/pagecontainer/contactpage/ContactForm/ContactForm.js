import React, { Component } from 'react'
import './ContactForm.scss'

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state= {
      username : '',
      email : '',
      phone: '',
      message : ''
    }
  }
  handleUsernameChange= (event) =>{
    this.setState({
      username:event.target.value
    })
  }
  handleEmailChange= event =>{
    this.setState({
      email:event.target.value
    })
  }
  handlePhoneChange = event => {
    this.setState({
      phone:event.target.value
    })
  }
  handleSubmit = event => {
    alert('Form has been submitted')
    event.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div>
      <form 
       onSubmit={this.handleSubmit}
        className='form-contact'
      >
        <div>
          <input
           type='text'
           name='name'
           value={this.state.username} 
           onChange={this.handleUsernameChange} 
           className='contact-input'
           placeholder='Enter Your Name'
           required
           />
        </div>
        <div>
          <input 
          type='email' 
          name='email'
          value={this.state.email} 
          onChange={this.handleEmailChange} 
          className='contact-input'
          placeholder='Enter Your E-Mail Id'
          />
        </div>
        <div>
          <input
          type='tel'
          name='number'
          pattern='[0-9]{10}'
          aria-label='10-digit-number'
          value={this.state.phone} 
          onChange={this.handlePhoneChange}
          className='contact-input'
          required
          placeholder='Enter Your Phone' />
        </div>
        <button type='submit' className='submit-button'>Submit</button>
      </form>
    </div>
    );
  }

}

export default ContactForm