// == Import npm
import React from 'react';

import Submenu from 'src/components/Submenu';
import 'src/styles/index.scss';

const Nav = () => (
  <nav className="nav">
    <div className="navLink">
      <a href="#" className="highTech">
        High Tech
        <Submenu />
      </a>
    </div>
    <div className="navLink">
      <a href="#" className="electromenager">
        Electromenager
        <Submenu />        
      </a>
    </div>
    <div className="navLink">
      <a href="#" className="alimentaire">
        Alimentaire
      <Submenu /> 
      </a>
    </div>
    <div className="navLink">
      <a href="#" className="mobDeco">
        Mobilier/Décoration
      <Submenu />         
      </a>
    </div>
    <div className="navLink">
      <a href="#" className="habillement">
        Habillement
      <Submenu />         
      </a>
    </div> 
  </nav>
);

export default Nav;
