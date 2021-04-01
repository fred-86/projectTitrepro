// Import npm
import React from 'react';

const AltCategoryCards = ({ places, selectedPlace, setSelectedPlace }) => {


  return (
    <section className="ContainerAltCategoryCards">
      {places.map((place, index) => (
        <React.Fragment key={place.id}>
          <input type="radio" value={place.id} name="AltCategoryCards__radio" id={`AltCategoryCards__radio-${index}`} onChange={setSelectedPlace} />
          <label className="Place" htmlFor={`AltCategoryCards__radio-${index}`}>
            <div className="Place__small">
              <img className="Place__small-img" src={place.logo} alt={place.name} />
              <section className="Place__small-details">
                <h2 className="Place__small-details-category-title">
                  {place.placeCategory.name}
                </h2>
                <h2 className="Place__small-details-name">
                  {place.name}
                </h2>
                <p className="Place__small-details-location">
                  <span className="Place__small-details-location-post">{place.department.postalcode}, </span>
                  {place.city}
                </p>
              </section>
            </div>
            <div className="Place__big">
              <div>
                <img className="Place__img" src={place.logo} alt={place.name} />
                <section className="Place__description">
                  <h2 className="Place__description-category-title">{place.placeCategory.name}</h2>
                  <h2 className="Place__description-name">{place.name}</h2>
                  <p className="Place__description-resume">
                    {place.content}
                  </p>
                </section>
              </div>
              <hr className="popUpAlt__hr" />
              <div>
                <section className="Place__comment">
                  <h2 className="popUpAlt__comment-title">Comment</h2>
                  <textarea type="text" className="popUpAlt__input" placeholder="Votre avis nous intéresse !" />
                  <a className="Place__description-link" href={place.url}>Voir le site</a>
                </section>
                <section className="Place__address">
                  <h2 className="Place__address-title">Adresse</h2>
                  <ul>
                    <li className="Place__adress-main">{place.address}</li>
                    <li className="Place__adress-comp">{place.addressComplement}</li>
                    <li className="Place__adress-location">
                      <span className="Place__adress-location-post">{place.department.postalcode}, </span>
                      {place.city}
                    </li>
                  </ul>
                  <img className="Place__address-map" src="#" alt="map"></img>
                </section>
              </div>
            </div>
          </label>
        </React.Fragment>
      ))
      }
    </section >
  );
};

export default AltCategoryCards
