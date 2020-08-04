import React from 'react';
import phoneImage from '../../assets/images/phone.png'
import './index.css';

function Consultation(props) {
  const { phoneNumber } = props;

  return (
    <div className="consultation__action">
      <div className="button__phone">
        <img className="button__phone-icon" src={phoneImage} alt="phone" />
        <p className="button__phone-title">{phoneNumber}</p>
      </div>
      <a
        className={`button button__default`}
        href={`tel:${phoneNumber}`}
      >
        Free Consultation
      </a>
    </div>
  );
}

export default Consultation;
