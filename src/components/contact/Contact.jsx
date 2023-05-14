import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  // This is conneted with imran yousaf email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_lcipssf', 'template_f4us864', form.current, 'A6tLJGpk-X20jP0Yt', {from_name: 'Imran Express'})
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    form.current.reset();
  };
  
  return (
    <section id="contact" >
      <h5 className='line'>Get In Touch</h5>
      <h2>Contact Us</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>yousafimran491@gmail.com</h5>
            <a href="mailto:yousafimran491@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+92 331 8690265</h5>
            <a href="https://api.whatsapp.com/send?phone=923318690265" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="10" placeholder='Your message here' required></textarea>
            <button type='submit' className='btn btn-primary'>Send message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
