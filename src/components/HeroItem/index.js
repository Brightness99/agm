import React from 'react';
import logo from '../../assets/images/logo.png';
import Button from '../Button'
import './index.css';

function HeroItem({ titleTop, titleBottom, link}) {
  return (
    <div className="hero-item">
      <div className="hero-item__desc">
        <p>{titleTop}</p>
        <p>{titleBottom}</p>
      </div>
      <Button.ClickButton link={link}/>
    </div>
  );
}

export default HeroItem;
