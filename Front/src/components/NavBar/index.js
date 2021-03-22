// == Import npm
import React from 'react';

import Submenu from 'src/components/Submenu';
import 'src/styles/index.scss';

const NavBar = () => (
  <nav className="navBar">
    <ul className="navBar__list">
      <li className="navLink navLink--1">
        High Tech
        <ul className="navBar__subList navBar__subList--1">
          <li className="navBar__subLink">Hifi</li>
          <li className="navBar__subLink">Tv/Vidéo</li>
          <li className="navBar__subLink">Photo/Caméra</li>
        </ul>
      </li>

      <li className="navLink navLink--2">
        Electromenager
      </li>
      <ul className="navBar__subList navBar__subList--2">
          <li className="navBar__subLink">Cuisine</li>
          <li className="navBar__subLink">Confort</li>
          <li className="navBar__subLink">Soin/Beauté</li>
      </ul>
      <li className="navLink">
        Alimentaire
      </li>
      <li className="navLink">
        Mobilier/Décoration</li>
      <li className="navLink">
        Habillement
      </li>
    </ul>
  </nav>
);

export default NavBar;
