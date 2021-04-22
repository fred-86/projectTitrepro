// Import npm
import React, { useRef } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';

// Import local
import Loader from '../Loader';
import { generateLink } from 'src/Utils';

// Component
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
  let productLink;
  let categoryLink;

  if (typeof currentProduct !== 'undefined') {
    categories.forEach((category) => {
      const searchedCategory = category.childCategories.find(
        (childCategories) => childCategories.id === currentProduct.productCategories[0].id);

      if (typeof searchedCategory !== 'undefined') {
        currentCategory = category;

        productLink = generateLink(currentProduct.productCategories[0].name);
        categoryLink = generateLink(currentCategory.name);
      }
    });
  }

  const getUserChoice = () => {
    const userChoice = {
      product: currentProduct,
      quantity: parseInt(quantity.current.value),
    };
    addToCart(userChoice);
  };

  return (
    <div className="ProductPage">
      {!isProductLoaded && <Loader />}
      {isProductLoaded && typeof currentProduct === "undefined" && <Redirect to="/404" />}
      <section className="description">
        {typeof currentProduct !== "undefined" && (
          <aside className="description__pictures">
            <img src={currentProduct.images[0].url} alt="" className="description__pictures-main" />
            <div className="description__pictures-alt">
              <img src="" alt="" className="description__pictures-alt-item" onClick={setPictureToMain} />
              <img src="" alt="" className="description__pictures-alt-item" onClick={setPictureToMain} />
              <img src="" alt="" className="description__pictures-alt-item" onClick={setPictureToMain} />
            </div>
          </aside>
        )}
        {typeof currentProduct !== "undefined" && (
          <article className="description__details">
            <Link to={`/${categoryLink}`} className="description__details-back-link">
              &#10554;
            </Link>
            <div className="breadcrumb">
              <ol className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <Link to={`/${categoryLink}`}>
                    {`${currentCategory.name} >`}
                  </Link>
                </li>
                <li className="breadcrumb__item">
                  <Link to={`/${categoryLink}/${productLink}`}>
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
