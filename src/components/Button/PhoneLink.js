import React from 'react';
import phoneImage from '../../assets/images/phone.png'
import './index.css';

function PhoneLink(props) {
  const { phoneNumber } = props;

  return (
    <a className="button button__phone" href={`tel:${phoneNumber}`}>
      <img className="button__phone-icon" src={phoneImage} alt="phone" />
      <p className="button__phone-title">{phoneNumber}</p>
    </a>
  );
}

export default PhoneLink;
