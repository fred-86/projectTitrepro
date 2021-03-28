// Import npm
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carrousel = ({ category, products, categoryPosition }) => {
  const [position, setPosition] = useState(0);
  const [picturesDisplayed, setPicturesDisplayed] = useState(4);
  const { name } = category;
  const { matches } = window.matchMedia('(max-width: 1200px');

  const swipe = (side) => {
    const frameSize = picturesDisplayed * 200 + (picturesDisplayed - 1) * 24 + 65;
    const lastFramePosition = 0 - (frameSize * (Math.floor(products.length / picturesDisplayed)));
    let newPosition = 0;

    if (side === 'right') {
      newPosition = position === lastFramePosition ? 0 : position - frameSize;
    }
    else {
      newPosition = position === 0 ? lastFramePosition : position + frameSize;
    }

    setPosition(newPosition);
  };

  useEffect(() => {
    if (matches) {
      setPicturesDisplayed(3);
    }
    else {
      setPicturesDisplayed(4);
    }
  }, []);

  return (
    <div
      className="Carrousel"
      style={{
        transform: `translateX(${categoryPosition[0]}px)`,
        marginRight: `${categoryPosition[1]}px`,
      }}
    >
      <h2 className="Carrousel__title">
        <Link to={`/${category.name}`}>
          {name}
        </Link>
      </h2>
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
          {products.map((product) => (
            <Link
              className="Carrousel__slider-content-product"
              to={`product/${product.id}`}
              key={product.id}
              style={{ transform: `translateX(${position}px)` }}
            >
              <img
                src={product.images[0].url}
                alt={product.images[0].alt}
                key={`product-${product.id}`}
              />
              <figcaption>
                {product.name}
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
