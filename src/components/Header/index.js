import React from 'react';
import logo from '../../assets/images/logo.png';
import Consultation from '../Button/Consultation'
import './index.css';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo" />
        <Consultation phoneNumber="(416) 477-5429"/>
      </div>
    </div>
  );
}

export default Header;
