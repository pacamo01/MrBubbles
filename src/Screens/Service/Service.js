import React from 'react';
import Header from '../../Components/Header/Header';
import './Service.css';
import service1 from '../../Assets/service1.png';
import service2 from '../../Assets/service2.png';
import service3 from '../../Assets/service3.png';
import arrow2 from '../../Assets/arrow2.png';

function Service() {
  return (
    <div className="service-container">
      <Header />
      <div className="container">
        <div className="sbox-container">
          <div className="sbox">
            <img src={service1} alt="mark" />
            <h1>BASIC HOUSE CLEANING</h1>
            <img style={{width: '80px', height: '80px', marginLeft: '110px'}} src={arrow2} alt="mark" />
          </div>
          <div className="sbox">
            <img src={service2} alt="mark" />
            <h1>LAUNDRY SERVICES</h1>
            <img style={{width: '80px', height: '80px', marginLeft: '110px'}} src={arrow2} alt="mark" />
          </div>
          <div className="sbox">
            <img src={service3} alt="mark" />
            <h1>SANITATION SERVICES</h1>
            <img style={{width: '80px', height: '80px', marginLeft: '110px'}} src={arrow2} alt="mark" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
