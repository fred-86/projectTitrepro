// Import npm
import React from 'react';

// Import local
import NavBar from '../NavBar';
import Carrousel from '../Carrousel';
import { loadCategory } from '../../store/actions';

const Home = ({ categories, products, displayedCategory, setDisplayedCategory }) => {
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
        {categories.map((category) => {
          const associatedProduct = products.filter((product) => (
            product.productCategories[0].id === category.id
          ));
          console.log(products[0]);
          return (
            <Carrousel category={category} key={category.id} />
          );
        })}
      </div>
      <button type="button" onClick={handlesSwitchCategory} value="left">left</button>
      <button type="button" onClick={handlesSwitchCategory} value="right">right</button>
    </div>
  );
};

export default Home;
