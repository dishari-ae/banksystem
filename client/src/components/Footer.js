import React from 'react';
import './Footer.css';
const Footer = () => {
  const getYr = () => {
    const options = {
      year: 'numeric',
    }
    return new Date().toLocaleString('en-US', options)
  }
  return (
    <footer>
      
      <p className='copyright'> WORLD BANK Copyright © {getYr()}</p>
      
    </footer>
  )
}

export default Footer;