import React from 'react';
import './index.css';

function Button(props) {
  const { title, phoneNumber } = props;

  return (
    <a
      className={`button button__default`}
      href={`tel:${phoneNumber}`}
    >
      {title}
    </a>
  );
}

export default Button;
