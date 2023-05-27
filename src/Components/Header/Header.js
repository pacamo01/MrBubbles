import React from 'react';
import logo from '../../Assets/logo.png';
import search from '../../Assets/search.png';
import line from '../../Assets/line.png';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
        <h2 className="heading">Mr. Bubbles</h2>
      </div>
      <div className="menu-container" style={{WebkitBorderBottomLeftRadius: 40, marginTop: '-25px'}}>
        <h3 className="menu-item" style={{marginRight: '50px', marginLeft: '30px'}}>HOME</h3>
        <h3 className="menu-item" style={{marginRight: '50px'}}>ABOUTUS</h3>
        <h3 className="menu-item" style={{marginRight: '50px'}}>SERVICE</h3>
        <h3 className="menu-item" style={{marginRight: '50px'}}>FEEDBACK</h3>
        <div className="search-line-container" style={{marginRight: '30px'}}>
          <img src={search} className="search-icon" alt="search" />
          <img src={line} className="line-icon" alt="line" />
        </div>
      </div>
    </div>
  );
}

export default Header;
