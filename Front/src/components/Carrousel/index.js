import React, { useState } from 'react';
import { images } from 'src/data';

const Carrousel = () => {
  const [startingIndex, setStartingIndex] = useState(0);
  const [currentImagesIndex, setCurrentImagesIndex] = useState([0, 1, 2]);

  let currentIndex = startingIndex;
  const currentImages = [];
  const sliderLength = 3;

  const swipe = (side) => {
    if (side === "left") {
      currentIndex--;

      currentIndex = currentIndex < 0 ? images.length - 1 : currentIndex;
    }
    else {
      currentIndex++;

      currentIndex = currentIndex > images.length - 1 ? 0 : currentIndex;
    }

    const indexList = [];
    let suppIndex = 0;

    for (let i = currentIndex; i < currentIndex + sliderLength; i++) {
      if (typeof images[i] !== 'undefined') {
        indexList.push(i);
      }
      else {
        indexList.push(suppIndex);
        suppIndex++;
      }
    }
    setCurrentImagesIndex(indexList);
    setStartingIndex(currentIndex);
  };

  currentImagesIndex.forEach((currentImageIndex) => {
    currentImages.push(images[currentImageIndex]);
  });

  return (
    <div className="Carrousel">
      <h2 className="Carrousel__title">High tech</h2>
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
          {currentImages.map((currentImage, index) => (
            <img src={currentImage.image} alt={`product_image-${index}`} key={index} />
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
