// Import npm
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// Component
const PlacePage = ({ token, loadPlaces, places, getMap, map }) => {
  const { id } = useParams();
  const currentPlace = places.find((place) => place.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (token !== '') {
      loadPlaces();
    }
  }, [token]);

  useEffect(() => {
    if (places.length > 0) {
      getMap(currentPlace);
    }
  }, [places]);

  return (
    <section className="PlacePage">
      <div className="PlacePage__banner">
        <div className="PlacePage__banner-quote">
          <p className="PlacePage__banner-quote-text">
            “Le problème, ce n’est pas le fait qu’on aille dans le mur ou pas. On va dans le mur !<br />
            Le problème, c’est à quelle vitesse on y va, à 50 km/h ou à 5 km/h.”
          </p>
          <p className="PlacePage__banner-quote-signature">
            Jean-Marc Jancovici<br />
            Associé fondateur de Carbone 4
          </p>
        </div>
      </div>
      <div className="PlacePage__presentation">
        {typeof currentPlace !== 'undefined' && <div className="PlacePage__presentation-wrapper">
          <Link to="/practical/category/0" className="PlacePage__presentation-returnBtn">
            &#10554;
          </Link>
          <h1 className="PlacePage__presentation-title">{currentPlace.name}</h1>
          <p className="PlacePage__presentation-description">{currentPlace.content}</p>
          <article className="PlacePage__presentation-address">
            <h2 className="PlacePage__presentation-address-title">Adresse</h2>
            <p className="PlacePage__presentation-address-text">
              {currentPlace.address}
            </p>
            <p className="PlacePage__presentation-address-text">
              {`${currentPlace.addressComplement}, ${currentPlace.city}`}
            </p>
          </article>
          <div className="PlacePage__presentation-map">
            <img className="PlacePage__presentation-map-geoloc" src={map} />
            <a className="PlacePage__presentation-map-btn" href={currentPlace.url} target="_blank">Voir le site</a>
          </div>
          <div className="PlacePage__presentation-comment">
            <h2 className="PlacePage__presentation-comment-title">Commentaire</h2>
            <input type="text" className="PlacePage__presentation-input" placeholder="Votre avis nous intéresse !" />
          </div>
        </div>}
      </div>
    </section>
  );
};

export default PlacePage;