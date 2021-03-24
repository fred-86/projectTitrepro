import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const CategoryNavBar = () => {
  return (
    <nav className="NavBarCategory">
      <ul className="NavBarCategory__link-list">
        <li className="NavBarCategory__link NavBarCategory__link--1">
          <NavLink to="/high_tech">
            High Tech
          </NavLink>
        </li>
        <li className="NavBarCategory__link NavBarCategory__link--2">
          <NavLink to="/electromenager">
            Electroménager
          </NavLink>
        </li>
        <li className="NavBarCategory__link NavBarCategory__link--3">
          <NavLink to="/alimentaire">
            Alimentaire
          </NavLink>
        </li>
        <li className="NavBarCategory__link NavBarCategory__link--4">
          <NavLink to="/decoration">
            Décoration
          </NavLink>
        </li>
        <li className="NavBarCategory__link NavBarCategory__link--5">
          <NavLink to="/habillement">
            Habillement
          </NavLink>
        </li>
      </ul>
    </nav>

  );
};
export default CategoryNavBar;
