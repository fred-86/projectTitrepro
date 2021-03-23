// Import npm
import React from 'react';

// Import local
import CategoryNavBar from '../CategoryNavBar';
import SubCategoriesImgs from '../SubCategoriesImgs';    
import picto from '../../assets/images/shopping-cart.svg';     

const PageCategory = () => {
  return (
    <React.Fragment>
      <section className="CategoryPage">
        <CategoryNavBar />
        <div className="MainImgCategory"></div>
          <nav className="Pictogram">
            <ul className="Pictogram__sub-list">
              <li className="Pictogram__sub Pictogram__sub-1"><img src={picto} alt="picto" /></li>
              <li className="Pictogram__sub Pictogram__sub-2"><img src="#" alt="picto" /></li>
              <li className="Pictogram__sub Pictogram__sub-3"><img src="#" alt="picto" /></li>
              <li className="Pictogram__sub Pictogram__sub-4"><img src="#" alt="picto" /></li>
              <li className="Pictogram__sub Pictogram__sub-4"><img src="#" alt="picto" /></li>
            </ul>
          </nav>
            <SubCategoriesImgs />
      </section>
    </React.Fragment>
  );
};

export default PageCategory
