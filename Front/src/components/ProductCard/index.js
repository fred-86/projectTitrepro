// Import npm
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const getUserChoice = () => {
    const userChoice = {
      product: product,
      quantity: 1,
    };
    addToCart(userChoice);
  };

  return (
    <Link className="ProductCard" to={`/product/${product.id}`}>
      <img className="ProductCard__img" src={product.images[0].url} alt={product.name} />
      <h2 className="ProductCard__title">{product.name}</h2>
      <p className="ProductCard__price">{product.price} &#8364;</p>
      <button type="button" className="ProductCard__btn" onClick={getUserChoice}>+</button>
    </Link>
  );
};

export default ProductCard;
