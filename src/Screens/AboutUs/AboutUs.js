import React from 'react';
import Header from '../../Components/Header/Header';
import logo from '../../Assets/logo.png';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
    <Header/>
        <div className="container">
            <div style={{backgroundColor: '#09606c', marginTop: '100px', width: '1000px', height: '500px'}}>
                <img style={{width: '120px', height: '120px', marginLeft: '450px', marginTop: '20px'}} src={logo} className="logo" alt="logo" />
                <div style={{backgroundColor: 'white', width: '90%', height: '56%', marginLeft: '5%'}}>
                <p style={{fontSize: '25px', marginBottom: '100px'}}>Welcome to Mr. Bubbles, where cleanliness meets convenience. We provide top-quality laundry services tailored to fit your busy lifestyle. With state-of-the-art equipment and skilled staff, we handle your garments with care and precision. From regular washing to delicate care and stain removal, we've got you covered. Enjoy prompt service and customer satisfaction at Mr. Bubbles. Experience the joy of fresh, perfectly laundered clothes today.</p>
                </div>
            </div>
      </div>
    </div>
  );
}

export default AboutUs;
