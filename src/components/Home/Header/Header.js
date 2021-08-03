import React from 'react';
import './Header.css';

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="header outer-shadow">
      <div className="container">
        <div className="row content-between items-center">
          <div className="logo">
            <a href="index.html">J</a>
          </div>
          <div
            className="hamburger-btn outer-shadow hover-in-shadow"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
