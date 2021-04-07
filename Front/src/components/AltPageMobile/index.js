// Import npm
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// Import local
import bannerAltCardImg from '../../assets/temp/imageAltDons.jpg';

const AltPageMobile = ({ token, loadPlaces, places, getMap, map }) => {
  const { id } = useParams();
  const currentPlace = places.find((place) => place.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (token !== '') {
      loadPlaces();
      getMap(currentPlace);
    }
  }, [token]);

  return (
    <section className="AltPageMobile">
      <div className="Alt__banner">
        <img className="Alt__bannerImg" src={bannerAltCardImg} alt="Dons" />
      </div>
      <div className="Alt__presentation">
        {typeof currentPlace !== 'undefined' && <div className="Alt__wrapper">
          <div className="Alt__returnToggle">
            <Link to="/practical/category/0" className="Alt__returnBtn">
              &#10554;
            </Link>
          </div>
          <h1 className="Alt__title">{currentPlace.name}</h1>
          <p className="Alt__description">{currentPlace.content}</p>
          <article className="Alt__adress">
            <h2 className="Alt__address--title">Adresse</h2>
            <p className="Alt__address--text">{currentPlace.address}</p>
            <p className="Alt__address--text">{`${currentPlace.addressComplement}, ${currentPlace.city}`}</p>
          </article>
          <div className="Alt__map">
            <img className="Alt__map--geoloc" src={map}></img>
            <button className="Alt__map--btn" href={currentPlace.url} target="_blank">Voir le site</button>
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
