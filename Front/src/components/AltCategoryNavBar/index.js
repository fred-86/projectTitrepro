// Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

const AltCategoryNavBar = ({ placeCategories }) => {
  return (
    <nav className="AltCategoryNavBar">
      <ul className="AltCategoryNavBar__list">
        <li>
          <NavLink to="/practical/category/0" className="AltCategoryNavBar__list-link" activeClassName="AltCategoryNavBar__list-link--active">
            Tout
          </NavLink>
        </li>
        {placeCategories.map((placeCategory) => (
          <li key={placeCategory.name}>
            <NavLink to={`/practical/category/${placeCategory.id}`} className="AltCategoryNavBar__list-link" activeClassName="AltCategoryNavBar__list-link--active">
              {placeCategory.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AltCategoryNavBar
