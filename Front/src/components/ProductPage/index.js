/* eslint-disable arrow-body-style */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';

const ProductPage = ({ data, addToCart, setPictureToMain, pictures }) => {
  const { name, compagny, description, price, save } = data;

  const quantity = useRef(null);

  const getUserChoice = () => {
    const userChoice = {
      quantity: quantity.current.value,
      productId: 1,
    };
    addToCart(userChoice);
  };

  return (
    <div className="ProductPage">
    <NavBar />

    <section className="description">
      <aside className="description__pictures">
        <img src={pictures[0]} alt="" className="description__pictures-main" />
        <div className="description__pictures-alt">
          <img src={pictures[1]} alt="" className="description__pictures-alt-item" onClick={setPictureToMain} />
          <img src={pictures[2]} alt="" className="description__pictures-alt-item" onClick={setPictureToMain} />
          <img src={pictures[3]} alt="" className="description__pictures-alt-item" onClick={setPictureToMain} />
        </div>
      </aside>
      <article className="description__details">
        <div className="breadcrumb">
            <ol className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="#">
                  Categorie&#x02002; &#x0003E; &#x02002;
                </Link>
              </li>
              <li className="breadcrumb__item">
                <Link to="#">
                Sous-catégorie&#x02002; &#x0003E; &#x02002; 
                </Link>
              </li>
              <li className="breadcrumb__item">
                Produit
              </li>
            </ol>
        </div>
        <h1 className="description__details-title">
          {name}
        </h1>
        <p className="description__details-compagny">
          By <em>{compagny}</em>
        </p>
        <div>
          <p className="description__details-price">
            <span className="description__details-price-amount">
              {price} €
            </span>
            <span className="description__details-price-save">
              Save {save}%
            </span>
          </p>
        </div>
        <p className="description__details-resume">
          {description}
        </p>
        <div className="description__details-cart">
          <div className="description__details-cart-quantity">
            <label htmlFor="description__details-cart-quantity-amount" className="description__details-cart-quantity-label">
              Quantité
            </label>
            <select className="description__details-cart-quantity-amount" id="description__details-cart-quantity-amount" ref={quantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button className="description__details-cart-btn" type="button" onClick={getUserChoice}>
            Ajouter
          </button>
        </div>
      </article>
    </section>
  </div>
);
};

export default ProductPage;
