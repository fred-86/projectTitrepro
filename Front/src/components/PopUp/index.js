// Import npm
import React from 'react';
import classNames from 'classnames';

const PopUp = ({ isActive, setIsActive, messages }) => {
  const popUpClass = classNames('PopUp', { 'PopUp--active': isActive });

  if (isActive) {
    setTimeout(() => {
      setIsActive(false);
    }, 4000);
  }

  return (
    <div className={popUpClass}>
      <p className="PopUp__warning">
        &#9888;
      </p>
      {messages.map((message, index) => (
        <p className="PopUp__message" key={index}>
          {message}
        </p>
      ))}
    </div>
  );
};

export default PopUp;
