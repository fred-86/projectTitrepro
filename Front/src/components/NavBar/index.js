// == Import npm
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ categories }) => (
  <nav className="navBar">
    <ul className="navBar__list">
      {categories.map((category, index) => (
        <li className={`navLink navLink--${index}`} key={category.name}>
          <NavLink to={`/${category.name}`}>
            {category.name}
          </NavLink>
          <ul className={`navBar__subList navBar__subList--${index}`}>
            {category.childCategories.map((childCategory) => (
              <li className="navBar__subLink" key={childCategory.name}>
                <Link to={`/${category.name}/${childCategory.name}`}>
                  {childCategory.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
