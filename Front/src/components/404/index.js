// Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import wallpaper from 'src/assets/images/404.png';

const Page404 = () => (
  <div className="Page404">
    <img src={wallpaper} className="Page404__image" />
    <article className="Page404__content">
      <h1 classsName="Page404__content-title"> 404 </h1>
      <p className="Page404__content-text">Oups,  Vous vous êtes perdu ! La page que vous cherchez n’a pas pu être trouvé </p>
      <Link to="/" className="Page404__content-button">
        Go back
      </Link>
    </article>
  </div>
);

export default Page404;
