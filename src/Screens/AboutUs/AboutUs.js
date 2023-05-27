import React from 'react';
import Header from '../../Components/Header/Header';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
    <Header/>
        <div className="container">
            <h1 style={{marginTop:'120px'}}>Welcome to the Plain Page</h1>
            <p>This is a plain page component.</p>
      </div>
    </div>
  );
}

export default AboutUs;
