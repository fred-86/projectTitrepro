// Import npm
import React, { useEffect } from 'react';

// Import local
import NavBar from '../NavBar';
import Carrousel from '../Carrousel';

const Home = ({
  categories,
  products,
  isCategoriesLoaded,
  isProductLoaded,
  position,
  setPosition 
}) => {
  const currentWidth = window.innerWidth;
  const initialPosition = Math.floor((currentWidth / 2) - 325 - 7);
  const lastPosition = 0 - (currentWidth * (categories.length - 1)) + initialPosition;

  const margin = currentWidth - 650;

  const swipeCategory = (side) => {
    let newPosition = 0;

    if (side === 'right') {
      newPosition = position === initialPosition ? lastPosition : position + currentWidth;
    }
    else {
      newPosition = position === lastPosition ? initialPosition : position - currentWidth;
    }

    setPosition(newPosition);
  };

  useEffect(() => {
    setPosition(initialPosition);
  }, []);

  return (
    <div className="Home">
      <NavBar categories={categories} />
      <button
        type="button"
        onClick={() => {
          swipeCategory('left');
        }}
      >
        left
      </button>
      <button
        type="button"
        onClick={() => {
          swipeCategory('right');
        }}
      >
        right
      </button>
      <div className="Home__content">
        {isCategoriesLoaded && isProductLoaded && categories.map((category) => {
          const childCategoriesIndex = category.childCategories.map((childCategorie) => (
            childCategorie.id
          ));
          const associatedProduct = products.filter((product) => (
            childCategoriesIndex.includes(product.productCategories[0].id)
          ));
          return (
            <Carrousel
              category={category}
              products={associatedProduct}
              categoryPosition={[position, margin]}
              key={category.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
