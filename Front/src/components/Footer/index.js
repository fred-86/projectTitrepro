// Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// Import local
import facebook from 'src/assets/images/socials/facebook.svg';
import twitter from 'src/assets/images/socials/twitter.svg';

const Footer = () => (
  <footer className="Footer">
    <p className="Footer__copyright">
      E-PAKO Copyright &#169; 2021. Tous droits réservés.
    </p>
    <ul className="Footer__links">
      <li>
        <Link to="/a-propos">
          A propos
        </Link>
      </li>
      <li>
        <Link to="/mentions-legales">
          Mentions légales
        </Link>
      </li>
      <li className="Footer__links-socials">
        <div>
          <a href="https://facebook.com" target="_blank">
            <img src={facebook} alt="facebook-icon" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitter} alt="twitter-icon" />
          </a>
        </div>
      </li>
    </ul>
  </footer>
);

export default Footer;
