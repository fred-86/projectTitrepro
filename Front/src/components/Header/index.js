import React from 'react';

import cart from 'src/assets/images/shopping-cart.svg';
import FlyingCart from '../FlyingCart/assistant';

const Header = ({ isOpened, setIsOpened }) => {
  
  return (
    <header className="Header">
      <p className="Header__logo">E-PAKO</p>
      <label className="Header__switch">
        <input type="checkbox" className="Header__switch-checkbox" />
        <span className="Header__switch-slider"></span>
      </label>
      <input type="search" className="Header__search" />
      <button className="Header__cart-button" onClick={setIsOpened}>
        <img src={cart} alt="cart" className="Header__cart-button-img" />
      </button>
      <FlyingCart />
    </header>
  );
};

export default Header;
