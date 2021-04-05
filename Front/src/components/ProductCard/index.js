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
    <article className="ProductCard">
      <Link className="ProductCard__link" to={`/product/${product.id}`}>
        <img className="ProductCard__link-img" src={product.images[0].url} alt={product.name} />
        <h2 className="ProductCard__link-title">{product.name}</h2>
        <p className="ProductCard__link-price">{product.price} &#8364;</p>
      </Link>
      <button type="button" className="ProductCard__btn" onClick={getUserChoice}>+</button>
    </article>
  );
};

export default ProductCard;
