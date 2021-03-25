import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Carrousel = ({ category, products }) => {
  const [startingIndex, setStartingIndex] = useState(0);
  const [currentProductsIndex, setCurrentProductsIndex] = useState(
    products.map((product, index) => (
      index
    )),
  );
  const { name } = category;

  let currentIndex = startingIndex;
  const currentProducts = [];
  const sliderLength = products.length;

  const swipe = (side) => {
    if (side === 'left') {
      currentIndex--;

      currentIndex = currentIndex < 0 ? products.length - 1 : currentIndex;
    }
    else {
      currentIndex++;

      currentIndex = currentIndex > products.length - 1 ? 0 : currentIndex;
    }

    const indexList = [];
    let suppIndex = 0;

    for (let i = currentIndex; i < currentIndex + sliderLength; i++) {
      if (typeof products[i] !== 'undefined') {
        indexList.push(i);
      }
      else {
        indexList.push(suppIndex);
        suppIndex++;
      }
    }
    setCurrentProductsIndex(indexList);
    setStartingIndex(currentIndex);
  };

  currentProductsIndex.forEach((currentProductIndex) => {
    currentProducts.push(products[currentProductIndex]);
  });

  return (
    <div className="Carrousel">
      <h2 className="Carrousel__title">{name}</h2>
      <div className="Carrousel__slider">
        <button
          type="button"
          className="Carrousel__slider-control Carrousel__slider-control--left"
          onClick={() => {
            swipe('left');
          }}
        >
          &#171;
        </button>
        <div className="Carrousel__slider-content">
          {currentProducts.map((currentProduct) => (
            <Link
              className="Carrousel__slider-content-product"
              to={`product/${currentProduct.id}`}
              key={currentProduct.id}
            >
              <img
                src={currentProduct.images[0].url}
                alt={currentProduct.images[0].alt}
                key={`product-${currentProduct.id}`}
              />
              <figcaption>
                {currentProduct.name}
              </figcaption>
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="Carrousel__slider-control Carrousel__slider-control--right"
          onClick={() => {
            swipe('right');
          }}
        >
          &#187;
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
