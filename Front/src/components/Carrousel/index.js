// Import npm
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import local
import { generateLink } from '../../Utils';

const Carrousel = ({ category, products, carrouselClass }) => {
  const [initialPosition, setInitialPosition] = useState(0);
  const [productsDisplayed, setProductsDisplayed] = useState(4);
  const slideNumber = Math.ceil(products.length / productsDisplayed);
  let slides = [];
  let firstIndex = 0;
  const { name } = category;
  const categoryLink = generateLink(category.name);

  for (let i = 0; i < slideNumber; i++) {
    const currentSlide = [];

    for (let i = firstIndex; i < firstIndex + productsDisplayed; i++) {
      if (typeof products[i] !== 'undefined') {
        currentSlide.push(products[i]);
      }
    }

    slides.push(currentSlide);
    firstIndex += productsDisplayed;
  }

  const handleSwipe = (side) => {
    if (side === 'left') {
      initialPosition === 0 ? setInitialPosition(slides.length - 1) : setInitialPosition(initialPosition - 1);
    }
    else {
      initialPosition === slides.length - 1 ? setInitialPosition(0) : setInitialPosition(initialPosition + 1);
    }
  };

  // Check how many products to display depending on viewport width
  const updateCarrousel = () => {
    const viewportWidth = window.innerWidth;
    let productsToDisplay = 4;

    if (viewportWidth < 1200) {
      productsToDisplay = 3;
    }

    if (viewportWidth < 992) {
      productsToDisplay = products.length;
      setInitialPosition(0);
    }

    setProductsDisplayed(productsToDisplay);
  };

  useEffect(() => {
    updateCarrousel();
    window.addEventListener('resize', updateCarrousel);

    return () => {
      window.removeEventListener('resize', updateCarrousel);
    };
  }, []);

  return (
    <div className={carrouselClass}>
      <h2 className="Carrousel__title">
        {categoryLink !== 'tendance' && <Link to={`/${categoryLink}`}>
          {name}
        </Link>}
        {categoryLink === 'tendance' && <span>{name}</span>}
      </h2>
      <div className="Carrousel__slider">
        <button
          type="button"
          className="Carrousel__slider-control Carrousel__slider-control--left"
          onClick={() => {
            handleSwipe('left');
          }}
        >
          &#171;
        </button>
        <div className="Carrousel__slider-content">
          {slides.map((slide, index) => {
            let slideClass = "Carrousel__slider-content-slide";

            if (index === initialPosition) {
              slideClass = "Carrousel__slider-content-slide Carrousel__slider-content-slide--displayed";
            }
            else if (index === initialPosition + 1) {
              slideClass = "Carrousel__slider-content-slide Carrousel__slider-content-slide--incoming";
            }
            else {
              slideClass = "Carrousel__slider-content-slide Carrousel__slider-content-slide--outgoing";
            }

            if (initialPosition === slides.length - 1 && index === 0 && slides.length > 1) {
              slideClass = "Carrousel__slider-content-slide Carrousel__slider-content-slide--incoming";
            }

            return (
              <div className={slideClass} key={index}>
                {slide.map((product) => (
                  <Link
                    className="Carrousel__slider-content-slide-link"
                    to={`product/${product.id}`}
                    key={product.id}
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
            );
          })}
        </div>
        <button
          type="button"
          className="Carrousel__slider-control Carrousel__slider-control--right"
          onClick={() => {
            handleSwipe('right');
          }}
        >
          &#187;
        </button>
      </div>
    </div>
  );
};

export default Carrousel;