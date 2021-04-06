// Import npm
import React, { useEffect } from 'react';

// Import local
import Loader from '../Loader';
import Carrousel from '../Carrousel';
import PromoCarrousel from '../PromoCarrousel';

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
      <PromoCarrousel />
      <button
        type="button"
        className="Home__swipe-btn Home__swipe-btn--left"
        onClick={() => {
          swipeCategory('left');
        }}
      >
        &#171;
      </button>
      <button
        type="button"
        className="Home__swipe-btn Home__swipe-btn--right"
        onClick={() => {
          swipeCategory('right');
        }}
      >
        &#187;
      </button>
      <div className="Home__content">
        {!isCategoriesLoaded && !isProductLoaded && <Loader />}
        {isCategoriesLoaded && isProductLoaded && categories.map((category, index) => {
          let associatedProduct = [];

          if (index !== categories.length - 1) {
            const childCategoriesIndex = category.childCategories.map((childCategorie) => (
              childCategorie.id
            ));
            associatedProduct = products.filter((product) => {
              return (
                childCategoriesIndex.includes(product.productCategories[0].id)
              )
            });
          }
          else {
            associatedProduct = products.filter((product) => product.productCategories.length > 1);
          }

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
