// Import npm
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

// Import local
import bannerAltCardImg from '../../assets/temp/imageAltDons.jpg';

const AltPageMobile = ({ token, loadPlaces, places }) => {
  /*
  <div className="AltPageMobile">
    <button className="Alt__back">&#60; Retour</button>
    <div className="Alt__picture"><img className="Alt__picture--pics"src="https://picsum.photos/id/28/400/400/"/></div>
    <div className="Alt__presentation">
      <h1 className="Alt__title">Distinctio</h1>
      <p className="Alt__description">Quia quia rem quisquam est et nisi qui voluptate soluta in facere ut esse alias tempore quasi harum non quisquam deserunt soluta.</p>
      <button className="Alt__link">Voir le site</button>
      <aside>
        <h2 className="Alt__address">Adresse</h2>
        <p className="Alt__address--text">15 rue de la Folie-Méricourt</p>
        <p className="Alt__address--text">75011 PARIS</p>
        <img className="Alt__address--map"></img>
      </aside>
      <hr className="Alt__hr"/>
      <div className="Alt__comment">
        <h2 className="Alt__comment--title">Commentaire</h2>
        <input className="Alt__input" placeholder="Votre avis nous intéresse !" />
      </div>
    </div>
  </div>
  */
  const { id } = useParams();
  const currentPlace = places.find((place) => place.id === parseInt(id));

  useEffect(() => {
    if (token !== '') {
      loadPlaces();
    }
  }, [token]);

  return (
    <section className="AltPageMobile">
      <div className="Alt__banner">
        <img className="Alt__bannerImg" src={bannerAltCardImg} alt="Dons" />
        <button className="Alt__bannerBtn">back</button>
      </div>
      <div className="Alt__presentation">
        {typeof currentPlace !== 'undefined' && <div className="Alt__wrapper">
          <h1 className="Alt__title">{currentPlace.name}</h1>
          <p className="Alt__description">{currentPlace.content}</p>
          <article className="Alt__adress">
            <h2 className="Alt__address--title">Adresse</h2>
            <p className="Alt__address--text">{currentPlace.address}</p>
            <p className="Alt__address--text">{`${currentPlace.department.postalcode}, ${currentPlace.city}`}</p>
          </article>
          <div className="Alt__map">
            <img className="Alt__map--geoloc"></img>
            <a className="Alt__map--btn" href={currentPlace.url} target="_blank">Visiter le site</a>
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
