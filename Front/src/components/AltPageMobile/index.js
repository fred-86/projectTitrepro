// Import npm
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const AltPageMobile = ({ token, loadPlaces, places, getMap, map }) => {
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
    <section className="AltPageMobile">
      <div className="Alt__banner">
        <div className="Alt__bannerQuote" alt="Dons">
          <p className="Alt__bannerQuote-text">
            “Le problème, ce n’est pas le fait qu’on aille dans le mur ou pas. On va dans le mur !<br />
            Le problème, c’est à quelle vitesse on y va, à 50 km/h ou à 5 km/h.”
          </p>
          <p className="Alt__bannerQuote-signature">
            Jean-Marc Jancovici<br />
            Associé fondateur de Carbone 4
          </p>
        </div>
      </div>
      <div className="Alt__presentation">
        {typeof currentPlace !== 'undefined' && <div className="Alt__wrapper">
          <Link to="/practical/category/0" className="Alt__returnBtn">
            &#10554;
          </Link>
          <h1 className="Alt__title">{currentPlace.name}</h1>
          <p className="Alt__description">{currentPlace.content}</p>
          <article className="Alt__adress">
            <h2 className="Alt__address--title">Adresse</h2>
            <p className="Alt__address--text">{currentPlace.address}</p>
            <p className="Alt__address--text">{`${currentPlace.addressComplement}, ${currentPlace.city}`}</p>
          </article>
          <div className="Alt__map">
            <img className="Alt__map--geoloc" src={map}></img>
            <a className="Alt__map--btn" href={currentPlace.url} target="_blank">Voir le site</a>
          </div>
          <div className="Alt__comment">
            <h2 className="Alt__comment--title">Commentaire</h2>
            <input className="Alt__input" placeholder="Votre avis nous intéresse !" />
          </div>
        </div>}
      </div>
    </section>
  );
};

export default AltPageMobile;