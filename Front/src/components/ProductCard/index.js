// Import npm
import React from 'react';

const ProductCard = ({ product }) => (
  <div className="ProductCard">
    <img className="ProductCard__img" src={product.images[0].url} alt={product.name} />
    <h2 className="ProductCard__title">{product.name}</h2>
    <p className="ProductCard__price">{product.price}</p>
    <button type="button" className="ProductCard__btn">+</button>
  </div>
);

export default ProductCard;
