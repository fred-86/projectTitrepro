// Import npm
import React, { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

// Import local
import { generateLink } from 'src/Utils';
import ProductCard from 'src/components/ProductCard';
import Loader from '../Loader';
import CategoryNavBar from '../CategoryNavBar';
import mainImg from '../../assets/temp/vegetables.jpg';

const PageCategory = ({ isCategoriesLoaded, categories, products, addToCart }) => {
  const { pathname } = useLocation();
  const pathStructure = pathname.split('/');
  let currentProducts = [];
  const navCategories = [
    ...categories,
  ];
  navCategories.pop();

  const currentCategory = categories.find((category) => (generateLink(category.name) === pathStructure[1]));
  const currentCategoryLink = generateLink(currentCategory.name);

  if (pathStructure.length < 3) {
    currentProducts = products.filter((product) => {
      const childCategoriesId = [];
      currentCategory.childCategories.forEach((childCategory) => {
        childCategoriesId.push(childCategory.id);
      });

      return childCategoriesId.includes(product.productCategories[0].id);
    });
  }
  else {
    currentProducts = products.filter((product) => {
      const producCategory = generateLink(product.productCategories[0].name);
      return producCategory === pathStructure[2];
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // TODO modifier src image quand intégrée au back
  return (
    <>
      <section className="CategoryPage">
        <CategoryNavBar categories={navCategories} />
        <div className="MainImgCategory">
          <img src={mainImg} className="MainImgCategory__img" alt={currentCategory.name} />
        </div>
        <nav className="Pictogram">
          <ul className="Pictogram__sub-list">
            {!isCategoriesLoaded && <Loader />}
            {isCategoriesLoaded && currentCategory.childCategories.map((childCategory) => {
              const childCategoryLink = generateLink(childCategory.name);
              return (
                <li className="Pictogram__sub Pictogram__sub-1" key={childCategory.id}>
                  <NavLink to={`/${currentCategoryLink}/${childCategoryLink}`}>
                    <img src="#" alt="picto" />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="ContainerSubCategoriesImg">
          {currentProducts.length > 0 && currentProducts.map((currentProduct) => (
            <ProductCard product={currentProduct} addToCart={addToCart} key={currentProduct.id} />
          ))}
          {currentProducts.length === 0 && <p className="ContainerSubCategoriesImg__empty-message">Veuillez nous excuser, nous ne proposons aucun article dans cette catégorie.</p>}
        </div>
      </section>
    </>
  );
};
export default PageCategory;
