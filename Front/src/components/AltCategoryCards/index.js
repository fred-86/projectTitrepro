// Import npm
import React from 'react';

// Import local
import PopUpAlt from '../PopUpAlt';

const AltCategoryCards = ({ places, selectedPlace, setSelectedPlace }) => {
  return (
    <section className="ContainerAltCategoryCards">
      {places.map((place, index) => (
        <React.Fragment key={place.id}>
          <label className="AltCategoryCards" htmlFor={`AltCategoryCards__radio-${index}`}>
            <img className="AltCategoryCards__img" src={place.logo} />
            <h2 className="AltCategoryCards__categoryTitle">{place.placeCategory.name}</h2>
            <h2 className="AltCategoryCards__title">{place.name}</h2>
            <p className="AltCategoryCards__adresse">{place.city}</p>

          </label>
          <input type="radio" value={place.id} name="AltCategoryCards__radio" id={`AltCategoryCards__radio-${index}`} onChange={setSelectedPlace} />
          {selectedPlace === place.id && <PopUpAlt place={place} />}
        </React.Fragment>
      ))}
    </section>
  );
};

export default AltCategoryCards
