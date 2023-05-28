import React from 'react';
import Header from '../../../Components/Header/Header';
import './Service3.css';
import service31 from '../../../Assets/service31.PNG';
import service32 from '../../../Assets/service32.PNG';
import service33 from '../../../Assets/service33.PNG';
import line2 from '../../../Assets/line2.png';

function Service3() {
  return (
    <div className="service3-container">
      <Header />
      <div className="container">
      <h1 className="titles3">SANITATION SERVICES</h1>
      <img src={line2} style={{height: '20px', width: '400px', marginTop: '20px', marginBottom: '-50px'}} alt="line" />
        <div className="s3box-container">
          <div className="s3box">
            <img src={service31} alt="mark" />
            <h2>Ozone Sanitization</h2>
            <p>Our laundry shop utilizes ozone sanitization technology to effectively eliminate bacteria, viruses, and odors from your garments.</p>
          </div>
          <div className="s3box">
            <img src={service32} alt="mark" />
            <h2>High-Heat Sanitization</h2>
            <p>We offer high-heat sanitization for items that can withstand elevated temperatures.</p>
          </div>
          <div className="s3box">
            <img src={service33} alt="mark" />
            <h2>Antibacterial Laundry Additives</h2>
            <p>a biocidal laundry additive formulated to medical standards for safe and effective sanitisation of laundry potentially contaminated by germs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service3;
