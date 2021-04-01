// Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import local
import { generateLink } from '../../Utils';

const CategoryNavBar = ({ categories }) => (
  <nav className="NavBarCategory">
    <ul className="NavBarCategory__list">
      {categories.map((category) => {
        const categoryLink = generateLink(category.name);
        return (
          <li key={category.name}>
            <NavLink to={`/${categoryLink}`} className="NavBarCategory__list-link" activeClassName="NavBarCategory__list-link--active">
              {category.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default CategoryNavBar;
