// == Import npm
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// Import local
import { generateLink } from '../../Utils';

const NavBar = ({ categories }) => (
  <nav className="navBar">
    <ul className="navBar__list">
      {categories.map((category, index) => {
        const categoryLink = generateLink(category.name);

        return (
          <li className={`navLink navLink--${index}`} key={category.name}>
            <NavLink to={`/${categoryLink}`}>
              {category.name}
            </NavLink>
            <ul className={`navBar__subList navBar__subList--${index}`}>
              {category.childCategories.map((childCategory) => {
                const childcategoryLink = generateLink(childCategory.name);

                return (
                  <li className="navBar__subLink" key={childCategory.name}>
                    <Link to={`/${categoryLink}/${childcategoryLink}`}>
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

export default NavBar;
