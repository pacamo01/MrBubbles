import React from 'react';
import Header from '../../../Components/Header/Header';
import './Service1.css';
import service11 from '../../../Assets/service11.PNG';
import service12 from '../../../Assets/service12.PNG';
import service13 from '../../../Assets/service13.PNG';
import line2 from '../../../Assets/line2.png';

function Service1() {
  return (
    <div className="service1-container">
      <Header />
      <div className="container">
      <h1 className="titles1">BASIC HOUSE CLEANING</h1>
      <img src={line2} style={{height: '20px', width: '400px', marginTop: '20px', marginBottom: '-50px'}} alt="line" />
        <div className="s1box-container">
          <div className="s1box">
            <img src={service11} alt="mark" />
            <p>Our laundry business offers expert washing and drying services for all types of clothing and fabrics. We use high-quality detergents and state-of- the-art machines to ensure thorough cleaning and gentle care for your garments. Say goodbye to the hassle of doing laundry at home and let us handle it with efficiency and expertise.</p>
          </div>
          <div className="s1box">
            <img src={service12} alt="mark" />
            <p>We understand the importance of presenting your clothes in their best condition. Our skilled team meticulously folds and irons your garments, leaving them looking crisp and professional. Whether it's dress shirts, pants, or delicate items, we take pride in delivering perfectly pressed clothes that are ready to wear.</p>
          </div>
          <div className="s1box">
            <img src={service13} alt="mark" />
            <p>Stubborn stains can be a headache, but worry not! Using specialized techniques and effective stain- removing products, we work diligently to remove stains and restore your garments to their original glory. Trust us to handle those pesky spills and marks, so you can enjoy your clothes stain-free.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service1;
