import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="Footer">
    <p>E-PAKO Copyright &#169; 2021. Tous droits réservés.</p>
      <ul>
        <li>
          <Link to="/apropos">
            A propos
          </Link>
        </li>
        <li>
          <Link to="/mentionslegales">
            Mentions légales
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
