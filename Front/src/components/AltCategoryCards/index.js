// Import npm
import React from 'react';

const AltCategoryCards = ({ places }) => {
  return (
    <section className="ContainerAltCategoryCards">
      {places.map((place) => (
        <div className="AltCategoryCards" key={place.id}>
          <img className="AltCategoryCards__img" src={place.logo} />
          <h2 className="AltCategoryCards__categoryTitle">{place.placeCategory.name}</h2>
          <h2 className="AltCategoryCards__title">{place.name}</h2>
          <p className="AltCategoryCards__adresse">{place.city}</p>
        </div>
      ))}
    </section>
  );
};

export default AltCategoryCards
