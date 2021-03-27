// Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryNavBar = ({ categories }) => (
  <nav className="NavBarCategory">
    <ul className="NavBarCategory__list">
      {categories.map((category) => (
        <li key={category.name}>
          <NavLink to={`/${category.name}`} className="NavBarCategory__list-link" activeClassName="NavBarCategory__list-link--active">
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default CategoryNavBar;
