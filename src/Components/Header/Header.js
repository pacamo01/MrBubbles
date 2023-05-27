import React, { useState } from 'react';
import logo from '../../Assets/logo.png';
import search from '../../Assets/search.png';
import line from '../../Assets/line.png';
import { useNavigate, useLocation} from "react-router-dom";
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNavItem, setActiveNavItem] = useState(location.pathname);
  const [aboutUsExpanded, setAboutUsExpanded] = useState(false);

  const handleNavigation = (path) => {
    setActiveNavItem(path);
    navigate(path);
  };
  
  const handleAboutUsClick = () => {
    navigate('/aboutus')
    setAboutUsExpanded(!aboutUsExpanded);
  };

  return (
    <div className="header-container">
      <div className="logo-container" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
        <img src={logo} className="logo" alt="logo" />
        <h2 className="heading">Mr. Bubbles</h2>
      </div>
      <div className="menu-container" style={{WebkitBorderBottomLeftRadius: 40, marginTop: '-25px'}}>
        <h3 className={`menu-item ${activeNavItem === '/' ? 'active' : ''}`} style={{marginRight: '50px', marginLeft: '30px', cursor: 'pointer'}} onClick={() => navigate('/')}>HOME</h3>
        <h3 className={`menu-item ${activeNavItem === '/aboutus' || location.pathname === '/contactus' ? 'active' : ''}`} style={{marginRight: '50px', cursor: 'pointer'}} onClick={handleAboutUsClick}>ABOUT US</h3>
        {location.pathname === '/aboutus' && (
          <div className="about-us-dropdown">
            <button
              style={{
                position: 'relative', // Change position to relative
                zIndex: 1, // Add a higher z-index to make the button clickable
                marginLeft: '-190px',
                marginTop: '80px',
                borderRadius: '10px',
                backgroundColor: '#09606c',
                height: '40px',
                width: '150px',
                cursor: 'pointer',
              }}
              className="contact-button"
              onClick={() => navigate('/contactus')}
            >
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>CONTACT US</span>
            </button>
          </div>
        )}
        <h3 className={`menu-item ${activeNavItem === '/service' ? 'active' : ''}`} style={{marginRight: '50px', cursor: 'pointer'}} onClick={() => navigate('/service')}>SERVICE</h3>
        <h3 className={`menu-item ${activeNavItem === '/feedback' ? 'active' : ''}`} style={{marginRight: '50px', cursor: 'pointer'}} onClick={() => navigate('/feedback')}>FEEDBACK</h3>
        <div className="search-line-container" style={{marginRight: '30px'}}>
          <img src={search} className="search-icon" alt="search" />
          <img src={line} className="line-icon" alt="line" />
        </div>
      </div>
    </div>
  );
}

export default Header;
