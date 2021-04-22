// Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// Component
const PlaceCard = ({
  data
}) => {
  const { id, logo, name, placeCategory, addressComplement, city } = data;

  return (
    <Link className="PlaceCard" to={`/practical/place/${id}`}>
      <img className="PlaceCard__img" src={logo} alt={name} />
      <section className="PlaceCard__details">
        <h2 className="PlaceCard__details-category-title">
          {placeCategory.name}
        </h2>
        <h2 className="PlaceCard__details-name">
          {name}
        </h2>
        <p className="PlaceCard__details-location">
          <span className="PlaceCard__details-location-post">{addressComplement}, </span>
          {city}
        </p>
      </section>
    </Link>
  );
};

export default PlaceCard;
