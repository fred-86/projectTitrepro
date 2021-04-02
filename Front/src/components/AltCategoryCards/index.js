// Import npm
import React from 'react';
import { Link } from 'react-router-dom';

const AltCategoryCards = ({ places }) => (
  <section className="ContainerAltCategoryCards">
    {places.map((place) => (
      <Link className="Place" key={place.id} to={`/practical/place/${place.id}`}>
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
      </Link>
    ))}
  </section>
);

export default AltCategoryCards
