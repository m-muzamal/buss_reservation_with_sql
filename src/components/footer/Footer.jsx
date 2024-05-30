import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="/home" className="footer__logo">UAF EXPRESS</a>
      <ul className="permalinks">
        <li><a href="/home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__queries">
        <h2>For Queries</h2>
        <p>+92 3154237255</p>
        <p>muzamal503@gmail.com</p>
      </div>
      
      <div className="footer__socials">
        <a href="https://www.facebook.com/imran.yousaf.777363" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
        <a href="https://instagram.com/vella.vlogger?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com/ImranKhanPTI" target="_blank" rel="noopener noreferrer"><ImTwitter/></a>
      </div>
      
    </footer>
    )
}

export default Footer
