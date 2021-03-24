import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row content-between items-center">
          <div className="logo">
            <a href="index.html">B</a>
          </div>
          <div className="hamburger-btn outer-shadow hover-in-shadow">
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
