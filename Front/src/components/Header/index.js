// Import npm
import React, { useEffect } from 'react';
import { NavLink, Link, Redirect, useLocation } from 'react-router-dom';
import classNames from 'classnames';

// Import local
import ePakoLogo from 'src/assets/images/ePaKo.svg';
import cart from 'src/assets/images/shopping-cart.svg';
import FlyingCart from '../FlyingCart/assistant';
import NavBar from '../NavBar';
import NavBarSmall from '../NavBarSmall';

// Component
const Header = ({ switchVisibility, mainSwitch, setMainSwitch, setIsOpened, items, itemAdded, setItemAdded, haveChange, categories, categoryPaths }) => {
  const { pathname } = useLocation();
  const switchPath = mainSwitch ? '/' : '/practical/category/0';

  const cartClass = classNames(
    'Header__cart-button-notification',
    { 'Header__cart-button-notification--updated': haveChange },
    { 'Header__cart-button-notification--new-item': itemAdded }
  );

  // Exclude tendance category from navBar
  const navCategories = categories.filter((category) => category.name !== "tendance");

  const forbiddenPaths = [...categoryPaths];
  forbiddenPaths.push("/cart", "/practical");

  const isCurrentPath = (path) => pathname.includes(path);
  const isNavHide = forbiddenPaths.some(isCurrentPath);

  const isCartPage = pathname === "/cart" ? true : false;

  // Set the path for le Logo link
  let homePath = "/";
  const isAltHome = pathname.includes("practical");

  if (isAltHome) {
    homePath = "/practical/category/0";
  }

  useEffect(() => {
    if (pathname === '/a-propos' || pathname === '/mentions-legales') {
      if (mainSwitch === true) {
        setMainSwitch();
      }
    }
  }, [pathname]);

  return (
    <>
      <header className="Header">
        <NavLink to={homePath}>
          <img src={ePakoLogo} alt="logo-ePako" className="Header__logo" />
        </NavLink>
        {switchVisibility && <label className="Header__switch" htmlFor="Header__switch-checkbox">
          <input type="checkbox" className="Header__switch-checkbox" id="Header__switch-checkbox" checked={mainSwitch} readOnly />
          <span className="Header__switch-slider" />
          <Link to={switchPath} className="Header__switch-link" onClick={setMainSwitch} />
        </label>}
        <input type="search" className="Header__search" />
        {!isCartPage && <button type="button" className="Header__cart-button" onClick={setIsOpened}>
          <img src={cart} alt="cart" className="Header__cart-button-img" />
          {items.length > 0 && <div className={cartClass} onAnimationEnd={setItemAdded}>+</div>}
        </button>}
        <FlyingCart />
      </header>
      {!isNavHide && <NavBar categories={navCategories} />}
      {!isNavHide && <NavBarSmall categories={navCategories} />}
    </>
  );
};

export default Header;
