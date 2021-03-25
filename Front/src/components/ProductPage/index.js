/* eslint-disable arrow-body-style */
import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import NavBar from '../NavBar';

const ProductPage = ({
  isProductLoaded,
  products,
  categories,
  addToCart,
  setPictureToMain 
}) => {
  const { id } = useParams();
  const quantity = useRef(null);

  const currentProduct = products.find((product) => product.id === parseInt(id));

  let currentCategory;

  if (typeof currentProduct !== 'undefined') {
    categories.forEach((category) => {
      const searchedCategory = category.childCategories.find(
        (childCategories) => childCategories.id === currentProduct.productCategories[0].id);

      if (typeof searchedCategory !== 'undefined') {
        currentCategory = category;
      }
    });
  }

  const getUserChoice = () => {
    const userChoice = {
      product: currentProduct,
      category: currentCategory.name,
      quantity: parseInt(quantity.current.value),
    };
    addToCart(userChoice);
  };

  return (
    <div className="ProductPage">
      <NavBar />
      <section className="description">
        {isProductLoaded && (
          <aside className="description__pictures">
            <img src={currentProduct.images[0].url} alt="" className="description__pictures-main" />
            <div className="description__pictures-alt">
              <img src="" alt="" className="description__pictures-alt-item" onClick={setPictureToMain} />
              <img src="" alt="" className="description__pictures-alt-item" onClick={setPictureToMain} />
              <img src="" alt="" className="description__pictures-alt-item" onClick={setPictureToMain} />
            </div>
          </aside>
        )}
        {isProductLoaded && (
          <article className="description__details">
            <div className="breadcrumb">
              <ol className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <Link to={`/${currentCategory.name}`}>
                    {`${currentCategory.name} >`}
                  </Link>
                </li>
                <li className="breadcrumb__item">
                  <Link to={`/${currentCategory.name}/${currentProduct.productCategories[0].name}`}>
                    {`${currentProduct.productCategories[0].name}`}
                  </Link>
                </li>
              </ol>
            </div>
            <h1 className="description__details-title">
              {currentProduct.name}
            </h1>
            <p className="description__details-compagny">
              By <em>{currentProduct.brand}</em>
            </p>
            <div>
              <p className="description__details-price">
                <span className="description__details-price-amount">
                  {currentProduct.price} €
                </span>
                <span className="description__details-price-save">
                  Save 75%
                </span>
              </p>
            </div>
            <p className="description__details-resume">
              {currentProduct.content}
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
        )}
      </section>
    </div>
  );
};

export default ProductPage;
