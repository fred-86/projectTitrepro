// == Import npm
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ categories }) => (
  <nav className="navBar">
    <ul className="navBar__list">
      <li className="navLink navLink--1">
        <NavLink to="/high_tech">
          High-Tech
        </NavLink>
        <ul className="navBar__subList navBar__subList--1">
          <li className="navBar__subLink">
            <Link to="/high_tech/hifi">
              Hifi
            </Link>
          </li>
          <li className="navBar__subLink">
            <Link to="/high_tech/tv_video">
              Tv/Vidéo
            </Link>
          </li>
          <li className="navBar__subLink">
            <Link to="/high_tech/photo_camera">
              Photo/Caméra
            </Link>
          </li>
        </ul>
      </li>

      <li className="navLink navLink--2">
        <NavLink to="/electromenager">
          Electroménager
        </NavLink>
        <ul className="navBar__subList navBar__subList--2">
          <li className="navBar__subLink">
            <Link to="/electromenager/cuisine">
              Cuisine
            </Link>
          </li>
          <li className="navBar__subLink">
            <Link to="/electromenager/confort">
              Confort
            </Link>
          </li>
          <li className="navBar__subLink">
            <Link to="/electromenager/soin_beaute">
              Soin/Beauté
            </Link>
          </li>
        </ul>
      </li>

      <li className="navLink navLink--3">
        <NavLink to="/alimentaire">
          Alimentaire
        </NavLink>  
        <ul className="navBar__subList navBar__subList--3">
          <li className="navBar__subLink">
            <Link to="/alimentaire/fruits_legumes">
              Fruits/Légumes
            </Link>
          </li>
          <li className="navBar__subLink">
            <Link to="/alimentaire/viandes_poissons">
              Viandes/Poissons
            </Link>
          </li>
          <li className="navBar__subLink">
            <Link to="/alimentaire/surgeles">
              Surgelés
            </Link>
          </li>
          <li className="navBar__subLink">
            <Link to="/alimentaire/boissons">
              Boissons
            </Link>
          </li>
        </ul>
      </li>

      <li className="navLink navLink--4">
        <NavLink to="/mobilier_decoration">  
          Mobilier/Décoration
        </NavLink>
        <ul className="navBar__subList navBar__subList--4">
          <li className="navBar__subLink">
            <Link to="/mobilier_decoration/salon">
              Salon
            </Link> 
          </li>
          <li className="navBar__subLink">
            <Link to="/mobilier_decoration/chambre">
              Chambre
            </Link>   
          </li>
          <li className="navBar__subLink">
            <Link to="/mobilier_decoration/bureau">
              Bureau
            </Link>   
          </li>
        </ul>
      </li>

      <li className="navLink navLink--5">
        <NavLink to="/habillement">
          Habillement
        </NavLink>
        <ul className="navBar__subList navBar__subList--5">
          <li className="navBar__subLink">
            <Link to="/habillement/vetements">
              Vêtements
            </Link>  
          </li>
          <li className="navBar__subLink">
            <Link to="/habillement/sous_vetements">
              Sous-vêtements
            </Link>  
          </li>
          <li className="navBar__subLink">
            <Link to="/habillement/chaussures">
              Chassures
            </Link>  
          </li>
          <li className="navBar__subLink">
            <Link to="/habillement/accessoires">
              Accessoires
            </Link>  
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default NavBar;
