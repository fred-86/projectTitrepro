// Import npm
import React, { useState, useEffect } from 'react';

// Import local
import { images } from 'src/data.js';

const PromoCarrousel = () => {
  const [promoIndex, setPromoIndex] = useState(0);

  const setPosition = (event) => {
    setPromoIndex(parseInt(event.target.value));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      promoIndex === images.length - 1 ? setPromoIndex(0) : setPromoIndex(promoIndex + 1);
    }, 3000);

    return () => clearInterval(timer);
  });

  return (
    <section className="PromoCarrousel">
      <div className="PromoCarrousel__content">
        <img src={images[promoIndex].image} alt="promo" className="PromoCarrousel__content-img" />
        <div>
          <label htmlFor="PromoCarrousel__content-indicator-1" className="PromoCarrousel__content-indicator-label" />
          <input type="radio" id="PromoCarrousel__content-indicator-1" name="indicator" value="0" onChange={setPosition} />
          <label htmlFor="PromoCarrousel__content-indicator-2" className="PromoCarrousel__content-indicator-label" />
          <input type="radio" id="PromoCarrousel__content-indicator-2" name="indicator" value="1" onChange={setPosition} />
          <label htmlFor="PromoCarrousel__content-indicator-3" className="PromoCarrousel__content-indicator-label" />
          <input type="radio" id="PromoCarrousel__content-indicator-3" name="indicator" value="2" onChange={setPosition} />
        </div>
      </div>
    </section>
  );
};

export default PromoCarrousel;