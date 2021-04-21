// Import npm
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import local
import { generateLink } from '../../Utils';

const CarrouselV2 = ({ category, products, categoryPosition }) => {
  const [initialPosition, setInitialPosition] = useState(0);
  const [picturesDisplayed, setPicturesDisplayed] = useState(4);
  const slideNumber = Math.ceil(products.length / picturesDisplayed);
  let slides = [];
  let firstIndex = 0;
  const { name } = category;
  const categoryLink = generateLink(category.name);

  for (let i = 0; i < slideNumber; i++) {
    const currentSlide = [];

    for (let i = firstIndex; i < firstIndex + picturesDisplayed; i++) {
      if (typeof products[i] !== 'undefined') {
        currentSlide.push(products[i]);
      }
    }

    slides.push(currentSlide);
    firstIndex += picturesDisplayed;
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
    let picturesToDisplay = 4;

    if (viewportWidth < 1200) {
      picturesToDisplay = 3;
    }

    if (viewportWidth < 992) {
      picturesToDisplay = products.length;
      setInitialPosition(0);
    }

    setPicturesDisplayed(picturesToDisplay);
  };

  useEffect(() => {
    updateCarrousel();
    window.addEventListener('resize', updateCarrousel);

    return () => {
      window.removeEventListener('resize', updateCarrousel);
    };
  }, []);

  console.log(slides);
  return (
    <div
      className="CarrouselV2"
      style={{
        transform: `translateX(${categoryPosition}px)`,
      }}
    >
      <h2 className="CarrouselV2__title">
        {categoryLink !== 'tendance' && <Link to={`/${categoryLink}`}>
          {name}
        </Link>}
        {categoryLink === 'tendance' && <span>{name}</span>}
      </h2>
      <div className="CarrouselV2__slider">
        <button
          type="button"
          className="CarrouselV2__slider-control CarrouselV2__slider-control--left"
          onClick={() => {
            handleSwipe('left');
          }}
        >
          &#171;
        </button>
        <div className="CarrouselV2__slider-content">
          {slides.map((slide, index) => {
            let slideClass = "CarrouselV2__slider-content-slide";

            if (index === initialPosition) {
              slideClass = "CarrouselV2__slider-content-slide CarrouselV2__slider-content-slide--displayed";
            }
            else if (index === initialPosition + 1) {
              slideClass = "CarrouselV2__slider-content-slide CarrouselV2__slider-content-slide--incoming";
            }
            else {
              slideClass = "CarrouselV2__slider-content-slide CarrouselV2__slider-content-slide--outgoing";
            }

            if (initialPosition === slides.length - 1 && index === 0 && slides.length < 1) {
              slideClass = "CarrouselV2__slider-content-slide CarrouselV2__slider-content-slide--incoming";
            }

            return (
              <div className={slideClass} key={index}>
                {slide.map((product) => (
                  <Link
                    className="CarrouselV2__slider-content-slide-link"
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
          className="CarrouselV2__slider-control CarrouselV2__slider-control--right"
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

export default CarrouselV2;