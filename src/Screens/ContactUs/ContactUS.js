import React from 'react';
import Header from '../../Components/Header/Header';
import logo from '../../Assets/logo.png';
import facebook from '../../Assets/facebook.png';
import instagram from '../../Assets/instagram.png';
import email from '../../Assets/email.png';
import phone from '../../Assets/phone.png';
import link from '../../Assets/link.png';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
    <Header/>
        <div className="container">
        <div className="contact2-container">
          <h1 className="titlesc">Contact Us</h1>
            <div className="flex-container" >
            <img src={logo} style={{ height: '120px', width: '120px', marginBottom: '-15px', marginLeft: '50px' }} alt="line" />
              <h1 className="titlesd">Mr. Bubbles</h1>
            </div>
            <div className="column-container">
              <div style={{display: 'flex' ,flexDirection: 'row', marginBottom: '-20px', marginTop: '-60px'}}>
              <img src={email} style={{ height: '40px', width: '40px', marginBottom: '-25px', marginLeft: '100px', marginTop: '26px', marginRight: '20px' }} alt="line" />
                <p style={{fontSize: '25px', fontWeight: 'bold', color: 'white'}}>Mr.Bubbles@gmail.com</p>
              </div>
              <div style={{display: 'flex' ,flexDirection: 'row', marginBottom: '-20px'}}>
              <img src={facebook} style={{ height: '40px', width: '40px', marginBottom: '-25px', marginLeft: '100px', marginTop: '26px', marginRight: '20px' }} alt="line" />
                <p style={{fontSize: '25px', fontWeight: 'bold', color: 'white'}}>Facebook.com/MrBubbles</p>
              </div>
              <div style={{display: 'flex' ,flexDirection: 'row', marginBottom: '-20px'}}>
              <img src={instagram} style={{ height: '40px', width: '40px', marginBottom: '-25px', marginLeft: '100px', marginTop: '26px', marginRight: '20px' }} alt="line" />
                <p style={{fontSize: '25px', fontWeight: 'bold', color: 'white'}}>Instagram.com/MrBubbles</p>
              </div>
              <div style={{display: 'flex' ,flexDirection: 'row', marginBottom: '-20px'}}>
              <img src={phone} style={{ height: '40px', width: '40px', marginBottom: '-25px', marginLeft: '100px', marginTop: '26px', marginRight: '20px' }} alt="line" />
                <p style={{fontSize: '25px', fontWeight: 'bold', color: 'white'}}>63+ 9232984763</p>
              </div>
              <div style={{display: 'flex' ,flexDirection: 'row', marginBottom: '-20px'}}>
              <img src={link} style={{ height: '40px', width: '40px', marginBottom: '-25px', marginLeft: '100px', marginTop: '26px', marginRight: '20px' }} alt="line" />
                <p style={{fontSize: '25px', fontWeight: 'bold', color: 'white'}}>www.MrBubbles.com</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
