// Import npm
import React, { useEffect } from 'react';
import { useLocation, NavLink, Redirect } from 'react-router-dom';

// Import local
import { generateLink } from 'src/Utils';
import ProductCard from 'src/components/ProductCard';
import Loader from '../Loader';
import CategoryNavBar from '../CategoryNavBar';
import mainImg from '../../assets/temp/vegetables.jpg';

const PageCategory = ({ isCategoriesLoaded, categories, products, addToCart }) => {
  let currentProducts = [];
  let currentCategoryLink;
  const { pathname } = useLocation();
  const pathStructure = pathname.split('/');
  const navCategories = [
    ...categories,
  ];
  navCategories.pop();

  const currentCategory = categories.find((category) => (generateLink(category.name) === pathStructure[1]));

  if (typeof currentCategory !== "undefined") {
    currentCategoryLink = generateLink(currentCategory.name);

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
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // TODO modifier src image quand intégrée au back
  return (
    <>
      {!isCategoriesLoaded && <Loader />}
      {isCategoriesLoaded && typeof currentCategory === "undefined" && <Redirect to="/404" />}
      {typeof currentCategory !== "undefined" && <section className="CategoryPage">
        <CategoryNavBar categories={navCategories} />
        <div className="MainImgCategory">
          <img src={currentCategory.pictogram} className="MainImgCategory__img" alt={currentCategory.name} />
        </div>
        <nav className="Pictogram">
          <ul className="Pictogram__list">
            {currentCategory.childCategories.map((childCategory) => {
              const childCategoryLink = generateLink(childCategory.name);
              return (
                <li className="Pictogram__list-item" key={childCategory.id}>
                  <NavLink
                    to={`/${currentCategoryLink}/${childCategoryLink}`} className="Pictogram__list-item-link"
                    activeClassName="Pictogram__list-item-link--active"
                  >
                    <img src={childCategory.pictogram} alt="picto" className="Pictogram__list-item-link-img" />
                    <img src={childCategory.pictogram} alt="picto" className="Pictogram__list-item-link-back" />
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
          {currentProducts.length === 0 && <p className="ContainerSubCategoriesImg__empty-message">
            Veuillez nous excuser, nous ne proposons aucun article dans cette catégorie.
          </p>}
        </div>
      </section>}
    </>
  );
};
export default PageCategory;
