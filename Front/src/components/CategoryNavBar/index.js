import React from 'react';

const CategoryNavBar = () => {
    return (
      <nav className="NavBarCategory">
        <ul className="NavBarCategory__link-list">
          <li className="NavBarCategory__link NavBarCategory__link--1">High Tech</li>
          <li className="NavBarCategory__link NavBarCategory__link--2">Electroménager</li>
          <li className="NavBarCategory__link NavBarCategory__link--3">Alimentaire</li>
          <li className="NavBarCategory__link NavBarCategory__link--4">Décoration</li>
          <li className="NavBarCategory__link NavBarCategory__link--5">Habillement</li>
        </ul>
      </nav>
    )
}
export default CategoryNavBar;
