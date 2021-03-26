// Import npm
import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

// Import local
import ProductCard from 'src/components/ProductCard';
import CategoryNavBar from '../CategoryNavBar';
import mainImg from '../../assets/temp/vegetables.jpg';

const PageCategory = ({ isCategoriesLoaded, categories, products }) => {
  const location = useLocation();

  const currentCategory = categories.find((category) => (category.name === location.pathname.split('/')[1]));

  const currentProducts = products.filter((product) => {
    const childCategoriesId = [];
    currentCategory.childCategories.forEach((childCategory) => {
      childCategoriesId.push(childCategory.id);
    });

    return childCategoriesId.includes(product.productCategories[0].id);
  });

  // TODO modifier src image quand intégrée au back
  return (
    <>
      <section className="CategoryPage">
        <CategoryNavBar categories={categories} />
        <div className="MainImgCategory">
          <img src={mainImg} className="MainImgCategory__img" alt={currentCategory.name} />
        </div>
        <nav className="Pictogram">
          <ul className="Pictogram__sub-list">
            {isCategoriesLoaded && currentCategory.childCategories.map(
              (childCategory) => (
                <li className="Pictogram__sub Pictogram__sub-1" key={childCategory.id}>
                  <NavLink to={`${location.pathname}/${childCategory.name}`}>
                    <img src="#" alt="picto" />
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="ContainerSubCategoriesImg">
          {currentProducts.map((currentProduct) => (
            <ProductCard product={currentProduct} key={currentProduct.id} />
          ))}
        </div>
      </section>
    </>
  );
};
export default PageCategory;
