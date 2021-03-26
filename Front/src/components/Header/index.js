// Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import local
import ePakoLogo from 'src/assets/images/ePaKo.svg';
import cart from 'src/assets/images/shopping-cart.svg';
import FlyingCart from '../FlyingCart/assistant';

const Header = ({ setIsOpened }) => (
  <header className="Header">
    <NavLink to="/">
      <img src={ePakoLogo} alt="logo-ePako" className="Header__logo" />
    </NavLink>
    <label className="Header__switch" htmlFor="Header__switch-checkbox">
      <input type="checkbox" className="Header__switch-checkbox" id="Header__switch-checkbox" />
      <span className="Header__switch-slider" />
    </label>
    <input type="search" className="Header__search" />
    <button type="button" className="Header__cart-button" onClick={setIsOpened}>
      <img src={cart} alt="cart" className="Header__cart-button-img" />
    </button>
    <FlyingCart />
  </header>
);

export default Header;
