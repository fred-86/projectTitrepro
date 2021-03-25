// Import npm
import React from 'react';

// Import local
import NavBar from '../NavBar';
import Carrousel from '../Carrousel';

const Home = ({
  categories,
  products,
  isCategoriesLoaded,
  isProductLoaded,
  displayedCategory,
  setDisplayedCategory 
}) => {
  const handlesSwitchCategory = (event) => {
    const newDisplayedCategory = (
      event.target.value === 'left'
        ? displayedCategory - 1
        : displayedCategory + 1
    );
    setDisplayedCategory(newDisplayedCategory);
  };

  return (
    <div className="Home">
      <NavBar categories={categories} />
      <div className="Home__content">
        {isCategoriesLoaded && isProductLoaded && categories.map((category) => {
          const childCategoriesIndex = category.childCategories.map((childCategorie) => (
            childCategorie.id
          ));
          const associatedProduct = products.filter((product) => (
            childCategoriesIndex.includes(product.productCategories[0].id)
          ));
          return (
            <Carrousel category={category} products={associatedProduct} key={category.id} />
          );
        })}
      </div>
      <button type="button" onClick={handlesSwitchCategory} value="left">left</button>
      <button type="button" onClick={handlesSwitchCategory} value="right">right</button>
    </div>
  );
};

export default Home;
