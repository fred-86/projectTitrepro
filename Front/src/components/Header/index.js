import React from 'react';
import { NavLink } from 'react-router-dom';


import cart from 'src/assets/images/shopping-cart.svg';
import FlyingCart from '../FlyingCart/assistant';
import ePakoLogo from 'src/assets/images/ePaKo.svg';


const Header = ({ isOpened, setIsOpened }) => {
  
  return (
    <header className="Header">
      <NavLink to="/">
        <img src={ePakoLogo} alt="logo-ePako" className="Header__logo" />
      </NavLink> 
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
