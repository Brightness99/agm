import React from 'react';
import './index.css';

function ClickButton(props) {
  const { link } = props;

  return (
    <a
      className={`button button__click`}
      href={link}
      target="_blank"
    >
      <span>Click</span>
      <span> Here</span>
    </a>
  );
}

export default ClickButton;
