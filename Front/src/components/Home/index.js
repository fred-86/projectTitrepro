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
  const fashionCategory = categories.find((category) => category.name === 'tendance');
  const fashionProduct = products.filter((product) => {
    const categoriesId = product.productCategories.map((productCategory) => productCategory.name);

    return categoriesId.includes('tendance');
  });

  const lockPosition = () => {
    const currentWidth = window.innerWidth;

    if (currentWidth > 992) {
      setPosition(0);
    }
  };

  const swipeCategory = (side) => {
    if (side === 'left') {
      position === 0 ? setPosition(categories.length - 2) : setPosition(position - 1);
    }
    else {
      position === categories.length - 2 ? setPosition(0) : setPosition(position + 1);
    }
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
        {(!isCategoriesLoaded || !isProductLoaded) && <Loader />}
        {isCategoriesLoaded && isProductLoaded && categories.map((category, index) => {
          let associatedProduct = [];
          let carrouselClass = 'Carrousel';

          if (category.name !== 'tendance') {
            const childCategoriesIndex = category.childCategories.map((childCategorie) => (
              childCategorie.id
            ));

            associatedProduct = products.filter((product) => {
              return (
                childCategoriesIndex.includes(product.productCategories[0].id)
              )
            });

            if (index === position) {
              carrouselClass = 'Carrousel Carrousel--displayed';
            }
            else if (index === position + 1) {
              carrouselClass = 'Carrousel Carrousel--incoming';
            }
            else {
              carrouselClass = 'Carrousel Carrousel--outgoing';
            }

            if (position === categories.length - 2 && index === 0) {
              carrouselClass = 'Carrousel Carrousel--incoming';
            }

            return (
              <Carrousel
                category={category}
                products={associatedProduct}
                carrouselClass={carrouselClass}
                key={category.id}
              />
            );
          }
        })}
        {isCategoriesLoaded && isProductLoaded && <Carrousel
          category={fashionCategory}
          products={fashionProduct}
          carrouselClass="Carrousel Carrousel--tendance"
        />}
      </div>
    </div>
  );
};

export default Home;
