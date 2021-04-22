// Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import local
import { generateLink } from '../../Utils';

// Component
const CategoryNavBar = ({ categories }) => (
  <nav className="CategoryNavBar">
    <ul className="CategoryNavBar__list">
      {categories.map((category) => {
        const categoryLink = generateLink(category.name);
        return (
          <li className="CategoryNavBar__list-item" key={category.name}>
            <NavLink to={`/${categoryLink}`} className="CategoryNavBar__list-item-link" activeClassName="CategoryNavBar__list-item-link--active">
              {category.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default CategoryNavBar;
