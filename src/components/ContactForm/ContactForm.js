import React, {useState} from 'react'
import './ContactForm.scss'

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phone,
      message,
    };
    console.log(formData)

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully.');
      } else {
        alert('Form submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className='contact_form'>
      <div className='form_heading'>Converse with Confidence</div>
      <form onSubmit={handleSubmit} className='form_'>
       <input 
        type='text'
        placeholder='Name' 
        name='name'
        value={name}
        onChange={handleNameChange}
        required 
        />
       <input 
        type='email' 
        placeholder='Email' 
        name='email'
        value={email}
        onChange={handleEmailChange}
        required 
        />
       <input
        type='tel'
        name='number'
        pattern='[0-9]{10}'
        aria-label='10-digit-number'
        placeholder='Phone Number' 
        value={phone}
        onChange={handlePhoneChange}
        required 
        />
       <textarea 
        name='message' 
        className='Message' 
        placeholder='Message' 
        value={message}
        onChange={handleMessageChange}
        />
       <button type='submit' className='submit_button_form'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm