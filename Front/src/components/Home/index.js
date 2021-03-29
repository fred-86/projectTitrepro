// Import npm
import React, { useEffect } from 'react';

// Import local
import Loader from '../Loader';
import Carrousel from '../Carrousel';

const Home = ({
  categories,
  products,
  isCategoriesLoaded,
  isProductLoaded,
  position,
  setPosition 
}) => {
  const lockPosition = () => {
    const currentWidth = window.innerWidth;

    if (currentWidth > 992) {
      setPosition(0);
    }
  };

 

  const swipeCategory = (side) => {
    const frameSize = window.innerWidth - 14;
    const lastPosition = 0 - (frameSize * (categories.length - 1));
    let newPosition = 0;

    if (side === 'right') {
      newPosition = position === 0 ? lastPosition : position + frameSize;
    }
    else {
      newPosition = position === lastPosition ? 0 : position - frameSize;
    }

    setPosition(newPosition);
  };

  useEffect(() => {
    window.addEventListener('resize', lockPosition);

    return () => {
      window.removeEventListener('resize', lockPosition);
    };
  }, []);

  return (
    <div className="Home">
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
        {!isCategoriesLoaded && !isProductLoaded && <Loader />}
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
              categoryPosition={position}
              key={category.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
