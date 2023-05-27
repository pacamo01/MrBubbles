import React from 'react';
import Header from '../../Components/Header/Header';
import logo from '../../Assets/logo.png';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
    <Header/>
        <div className="container">
          <div>
          <div className="contact-logo-container">
                  <img src={logo} className="logo" alt="logo" />
                  <h2 className="heading">Mr. Bubbles</h2>
                </div>
            <h1 style={{marginTop:'120px'}}>Welcome to the Plain Page</h1>
            <p>This is a plain page component.</p>
          </div>
      </div>
    </div>
  );
}

export default ContactUs;
