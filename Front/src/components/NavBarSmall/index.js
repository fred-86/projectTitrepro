// Import npm
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// Import local
import { generateLink } from '../../Utils';

const NavBarSmall = ({ categories }) => (
  <nav className="NavBarSmall">
    <div>
      <label className="NavBarSmall__main-toggle-label" htmlFor="NavBarSmall__main-toggle">
        <span className="NavBarSmall__main-toggle-label-bar"></span>
        <span className="NavBarSmall__main-toggle-label-bar"></span>
        <span className="NavBarSmall__main-toggle-label-bar"></span>
      </label>
    </div>
    <input id="NavBarSmall__main-toggle" type="checkbox" />
    <ul className="NavBarSmall__list">
      {categories.map((category, index) => {
        const categoryLink = generateLink(category.name);

        return (
          <li className={`navLink navLink--${index}`} key={category.name}>
            <NavLink to={`/${categoryLink}`}>
              {category.name}
            </NavLink>
            <label htmlFor={`navLink__toggle-${index}`} className="navLink__toggle-label navLink__toggle-label--1"></label>
            <label htmlFor={`navLink__toggle-${index}`} className="navLink__toggle-label navLink__toggle-label--2"></label>
            <input className="navLink__toggle" id={`navLink__toggle-${index}`} name="navLink__toggle-input" type="radio" />
            <ul className={`NavBarSmall__subList NavBarSmall__subList--${index}`}>
              {category.childCategories.map((childCategory) => {
                const childCategoryLink = generateLink(childCategory.name);
                return (
                  <li className="NavBarSmall__subLink" key={childCategory.name}>
                    <Link to={`/${categoryLink}/${childCategoryLink}`}>
                      {childCategory.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default NavBarSmall;