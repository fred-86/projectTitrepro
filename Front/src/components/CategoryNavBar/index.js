// Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryNavBar = ({ categories }) => (
  <nav className="NavBarCategory">
    <ul className="NavBarCategory__link-list">
      {categories.map((category) => (
        <li className="NavBarCategory__link" key={category.name}>
          <NavLink to={`/${category.name}`}>
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default CategoryNavBar;
