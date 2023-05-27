import React from 'react';
import Header from '../../Components/Header/Header';
import arrow from '../../Assets/arrow.png';
import calendar from '../../Assets/calendar.png';
import car from '../../Assets/car.png';
import './Home.css';

function Home() {
    const handleButtonClick = (buttonText) => {
        // Handle button click action
        console.log(`Button clicked: ${buttonText}`);
    };

    return (
        <div className="home-container">
            <Header />
            <div className="container">
                <div>
                    <h1 className="title">Mr. Bubbles</h1>
                    <h1 className="title2">Laundry Services</h1>
                    <h2 className="title2" style={{ marginTop: '50px' }}>Sparkling Clean, From Threads to Gleam!</h2>
                    <div className="button-group" style={{ marginLeft: '-100px', marginRight: '360px'}}>
                        <button className="button" onClick={() => handleButtonClick('Button 1')}>
                            <img style={{width: '30px', height: '30px'}} src={calendar} alt="Button 1 Image" />
                            <span style={{ marginLeft: '20px' }}>Pickup Now</span>
                        </button>
                        <button className="button" onClick={() => handleButtonClick('Button 2')}>
                            <span style={{ marginRight: '20px' }}>Discover Now</span>
                            <img src={arrow} alt="Button 2 Image" />
                        </button>
                    </div>
                    <div className="form">
                        <h2 className="request-pickup-title">Request Pickup</h2>
                        <div className="input-row">
                            <input style={{marginLeft:'30px'}} type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Phone" />
                        </div>
                        <div className="input-row">
                            <input type="date" placeholder="Date" />
                            <input type="time" placeholder="Time" />
                            <button style={{marginLeft: '20px'}} className="button" onClick={() => handleButtonClick('Button 2')}>
                                <span style={{ marginRight: '20px' }}>Pickup Now</span>
                                <img src={car} alt="Button 2 Image" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
