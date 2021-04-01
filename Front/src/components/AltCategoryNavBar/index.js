// Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import local
import { generateLink } from 'src/Utils';

const AltCategoryNavBar = ({ placeCategories }) => {
  return (
    <nav className="AltCategoryNavBar">
      <ul className="AltCategoryNavBar__list">
        <li>
          <NavLink to="/practical/category/0">
            All
          </NavLink>
        </li>
        {placeCategories.map((placeCategory) => {
          //const formatLink = generateLink(placeCategory.name);
          return (
            <li key={placeCategory.name}>
              <NavLink to={`/practical/category/${placeCategory.id}`} className="AltCategoryNavBar__list-link" activeClassName={"AltCategoryNavBar__list-link--active"}>
                {placeCategory.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default AltCategoryNavBar
