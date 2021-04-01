// Import npm
import React, { useEffect } from 'react';
import { NavLink, Redirect, useLocation } from 'react-router-dom';

// Import local
import ePakoLogo from 'src/assets/images/ePaKo.svg';
import cart from 'src/assets/images/shopping-cart.svg';
import FlyingCart from '../FlyingCart/assistant';
import NavBar from '../NavBar';
import NavBarSmall from '../NavBarSmall';

// Component
const Header = ({ mainSwitch, setMainSwitch, setIsOpened, categories, categoryPaths }) => {
  const navCategories = [
    ...categories,
  ];

  navCategories.pop();

  const { pathname } = useLocation();

  const forbiddenPaths = [...categoryPaths];
  forbiddenPaths.push("/cart", "/practical");
  const isCurrentPath = (path) => pathname.includes(path);
  const isNavHide = forbiddenPaths.some(isCurrentPath);

  const isCartPage = pathname === "/cart" ? true : false;
  const isAltHome = pathname.includes("practical");

  let homePath = "/";

  if (isAltHome) {
    homePath = "/practical/category/0";
  }

  return (
    <>
      <header className="Header">
        <NavLink to={homePath}>
          <img src={ePakoLogo} alt="logo-ePako" className="Header__logo" />
        </NavLink>
        <label className="Header__switch" htmlFor="Header__switch-checkbox">
          <input type="checkbox" className="Header__switch-checkbox" id="Header__switch-checkbox" value={mainSwitch} onChange={setMainSwitch} />
          <span className="Header__switch-slider" />
        </label>
        <input type="search" className="Header__search" />
        {!isCartPage && <button type="button" className="Header__cart-button" onClick={setIsOpened}>
          <img src={cart} alt="cart" className="Header__cart-button-img" />
        </button>}
        <FlyingCart />
      </header>
      {!isNavHide && <NavBar categories={navCategories} />}
      {!isNavHide && <NavBarSmall categories={navCategories} />}
      {mainSwitch && <Redirect to="/practical/category/0" />}
      {!mainSwitch && <Redirect to="/" />}
    </>
  );
};

export default Header;
