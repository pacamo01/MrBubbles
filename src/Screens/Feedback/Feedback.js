import React from 'react';
import Header from '../../Components/Header/Header';
import './Feedback.css';
import mark from '../../Assets/mark.png';
import stars from '../../Assets/stars.png';

function Feedback() {
  return (
    <div className="feedback-container">
      <Header />
      <div className="container">
        <h2 style={{ color: '#eb7a12', marginTop: '50px' }}>Testimonial</h2>
        <h1 className="what">What They Say</h1>
        <div className="box-container">
          <div className="box">
            <img src={mark} alt="mark" />
            <p>Impressive service! My clothes have never looked better. The attention to detail and quality of cleaning are unmatched. Highly satisfied!</p>
            <img src={stars} style={{width:120, marginLeft: '90px'}} alt="stars" />
            <p>Client 1</p>
          </div>
          <div className="box">
            <img src={mark} alt="mark" />
            <p>Exceptional laundry experience! The staff is professional, and my garments always come back fresh
and perfectly pressed. This laundry business is my go-to for all my clothing care needs.</p>
            <img src={stars} style={{width:120, marginLeft: '90px', marginTop: '-0px'}} alt="stars" />
            <p>Client 2</p>
          </div>
          <div className="box">
            <img src={mark} alt="mark" />
            <p>Outstanding results! Stains magically disappear, and my clothes smell amazing after each
wash. The convenience and reliability of this laundry service are second to none. Highly impressed!</p>
            <img src={stars} style={{width:120, marginLeft: '90px', marginTop: '0px'}} alt="stars" />
            <p>Client 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
