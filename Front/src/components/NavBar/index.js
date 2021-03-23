// == Import npm
import React from 'react';

import 'src/styles/index.scss';

const NavBar = () => (
  <nav className="navBar">
    <ul className="navBar__list">
      <li className="navLink navLink--1">
        High-Tech
        <ul className="navBar__subList navBar__subList--1">
          <li className="navBar__subLink">Hifi</li>
          <li className="navBar__subLink">Tv/Vidéo</li>
          <li className="navBar__subLink">Photo/Caméra</li>
        </ul>
      </li>

      <li className="navLink navLink--2">
        Electromenager
        <ul className="navBar__subList navBar__subList--2">
          <li className="navBar__subLink">Cuisine</li>
          <li className="navBar__subLink">Confort</li>
          <li className="navBar__subLink">Soin/Beauté</li>
        </ul>
      </li>

      <li className="navLink navLink--3">
        Alimentaire
        <ul className="navBar__subList navBar__subList--3">
          <li className="navBar__subLink">Fruits/Légumes</li>
          <li className="navBar__subLink">Viandes/Poissons</li>
          <li className="navBar__subLink">Surgelés</li>
          <li className="navBar__subLink">Boissons</li>
        </ul>
      </li>

      <li className="navLink navLink--4">
        Mobilier/Décoration
        <ul className="navBar__subList navBar__subList--4">
          <li className="navBar__subLink">Salon</li>
          <li className="navBar__subLink">Chambre</li>
          <li className="navBar__subLink">Bureau</li>
        </ul>
      </li>

      <li className="navLink navLink--5">
        Habillement
        <ul className="navBar__subList navBar__subList--5">
          <li className="navBar__subLink">Vêtements</li>
          <li className="navBar__subLink">Sous-vêtements</li>
          <li className="navBar__subLink">Chassures</li>
          <li className="navBar__subLink">Accessoires</li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default NavBar;
