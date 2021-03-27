import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Carrousel = ({ category, products }) => {
  const [position, setPosition] = useState(0);
  const { name } = category;

  const swipeAlt = (side) => {
    const frameSize = 4 * 200 + 3 * 24 + 65;
    const lastFramePosition = 0 - (frameSize * (products.length % 4));
    let newPosition = 0;

    if (side === 'right') {
      newPosition = position === lastFramePosition ? 0 : position - 937;
    }
    else {
      newPosition = position === 0 ? lastFramePosition : position + 937;
    }

    setPosition(newPosition);
  };

  return (
    <div className="Carrousel">
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
            swipeAlt('left');
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
            swipeAlt('right');
          }}
        >
          &#187;
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
