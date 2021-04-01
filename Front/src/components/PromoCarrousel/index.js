// Import npm
import React, { useState, useEffect } from 'react';

// Import local
import { images } from 'src/data.js';

const PromoCarrousel = () => {
  const [promoIndex, setPromoIndex] = useState(0);
  const positions = [
    "displayed",
    "incoming",
    "waiting"
  ];

  const setPosition = (event) => {
    setPromoIndex(parseInt(event.target.value));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      promoIndex === images.length - 1 ? setPromoIndex(0) : setPromoIndex(promoIndex + 1);
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <section className="PromoCarrousel">
      <div className="PromoCarrousel__content">
        {images.map((image, index) => {
          let position;

          if (index === promoIndex) {
            position = `PromoCarrousel__content-img-${positions[0]}`;
          }
          else if (index === promoIndex + 1) {
            position = `PromoCarrousel__content-img-${positions[1]}`;
          }
          else {
            position = `PromoCarrousel__content-img-${positions[2]}`;
          }

          return (
            <img src={image.image} alt="promo" className={`PromoCarrousel__content-img ${position}`} key={index} />
          );
        })}

        <div>
          {images.map((image, index) => {
            const indicator = index === promoIndex ? "active" : "waitin";

            return (
              <div key={index}>
                <label htmlFor={`PromoCarrousel__content-indicator-${index}`} className={`PromoCarrousel__content-indicator-label PromoCarrousel__content-indicator-label-${indicator}`} />
                <input type="radio" id={`PromoCarrousel__content-indicator-${index}`} name="indicator" value={index} onChange={setPosition} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromoCarrousel;