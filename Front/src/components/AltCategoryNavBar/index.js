import React from 'react';

const AltCategoryNavBar = () => {
  return(
    <nav className="AltCategoryNavBar">
      <ul className="AltCategoryNavBar__link-list">
        <li className="AltCategoryNavBar__link AltCategoryNavBar__link--1">
            Alimentaire
        </li>
        <li className="AltCategoryNavBar__link AltCategoryNavBar__link--2">
            Occasions
        </li>
        <li className="AltCategoryNavBar__link AltCategoryNavBar__link--3">
            Dons
        </li>
        <li className="AltCategoryNavBar__link AltCategoryNavBar__link--4">
            Associations
        </li>
        <li className="AltCategoryNavBar__link AltCategoryNavBar__link--5">
            Trocs
        </li>
        <li className="AltCategoryNavBar__link AltCategoryNavBar__link--5">
            Autres
        </li>
      </ul>
    </nav>
  );
}

export default AltCategoryNavBar
