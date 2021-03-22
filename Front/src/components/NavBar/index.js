import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul className="NavBar__list">
        <li className="NavBar__list-link NavBar__list-link--1">
          <NavLink to="/high_tech">
            High Tech
          </NavLink>
          <ul className="NavBar__sublist NavBar__sublist--1">
            <li className="NavBar__sublink">
              <Link to="/high_tech/hifi">
                Hifi
              </Link>
            </li>
            <li className="NavBar__sublink">
              <Link to="/high_tech/tv_video">
                Tv/Vidéo
              </Link>
            </li>
            <li className="NavBar__sublink">
              <Link to="/high_tech/photo_camera">
                Photo/Caméra
              </Link>
            </li>
          </ul>
        </li>
        <li className="NavBar__list-link NavBar__list-link--2">
          <NavLink to="/electromenager">
            Electroménager
          </NavLink>
          <ul className="NavBar__sublink-list NavBar__sublink-list--2">
            <li className="NavBar__sublink">
              <Link to="/electromenager/cuisine">
                Cuisine
              </Link>
            </li>
            <li className="NavBar__sublink">
              <Link to="/electromenager/confort">
                Confort
              </Link>
            </li>
            <li className="NavBar__sublink">
              <Link to="/electromenager/soin_beaute">
                Soin/Beauté
              </Link>
            </li>
          </ul>
        </li>
        <li className="NavBar__list-link NavBar__list-link--3">
          <Link to="/alimentaire">
            Alimentaire
          </Link>
          <ul className="NavBar__sublink-list NavBar__sublink-list--3">
            <li className="NavBar__sublink">
              <Link to="/alimentaire/fruits_legumes">
                Fruits et légumes
              </Link>
            </li>
            <li className="NavBar__sublink">
              <Link to="/alimentaire/viandes_poissons">
                Viandes et poissons
              </Link>
            </li>
            <li className="NavBar__sublink">
              <Link to="/alimentaire/surgeles">
                Surgelés
              </Link>
            </li>
            <li className="NavBar__sublink">
              <Link to="/alimentaire/boissons">
                Boissons
              </Link>
            </li>
          </ul>
        </li>
        <li className="NavBar__link NavBar__link--4">
          <Link to="/mobilier_decoration">
            Mobilier/Décoration
          </Link>
          <ul className="NavBar__sublink-list NavBar__sublink-list--4">
            <li className="NavBar__sublink">
              <Link to="/mobilier_decoration/salon">
                Salon
              </Link>
            </li>
            <li className="NavBar__sublink">
              <Link to="/mobilier_decoration/chambre">
                Chambre
              </Link>
            </li>
            <li className="NavBar__sublink">
              <Link to="/mobilier_decoration/bureau">
                Bureau
              </Link>
            </li>
          </ul>
        </li>
        <li className="NavBar__link">
          <Link to="/habillement">
            Habillement
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
