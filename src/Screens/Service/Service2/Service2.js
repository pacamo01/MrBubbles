import React from 'react';
import Header from '../../../Components/Header/Header';
import './Service2.css';
import service21 from '../../../Assets/service21.PNG';
import service22 from '../../../Assets/service22.PNG';
import service23 from '../../../Assets/service23.PNG';
import service24 from '../../../Assets/service24.PNG';
import line2 from '../../../Assets/line2.png';

function Service2() {
  return (
    <div className="service1-container">
      <Header />
      <div className="container">
        <h1 className="titles1">LAUNDRY SERVICES</h1>
        <img src={line2} style={{ height: '20px', width: '400px', marginTop: '20px', marginBottom: '-40px' }} alt="line" />

        <div className="main-container">
          <div className="top-row">
            <div className="sub-container" style={{marginRight: '150px'}}>
              <img src={service21} alt="Service 21" />
              <p style={{marginLeft: '-45px'}} className="titles11">ALTERATIONS AND REPAIRS</p>
            </div>
            <div className="sub-container">
              <img src={service22} alt="Service 22" />
              <p style={{marginLeft: '15px'}} className="titles11">STAIN REMOVAL</p>
            </div>

          </div>

          <div className="bottom-row" style={{marginBottom: '20px', marginTop: '-5px'}} >
            <div className="sub-container" style={{marginRight: '150px'}}>
              <img src={service23} alt="Service 23" />
              <p style={{marginLeft: '-25px'}} className="titles11">IRONING AND PRESSING</p>
            </div>
            <div className="sub-container">
              <img src={service24} alt="Service 24" />
              <p style={{marginLeft: '10px'}} className="titles11">WASH AND FOLD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service2;
