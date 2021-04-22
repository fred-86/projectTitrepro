// Import npm
import React, { useEffect } from 'react';
import { useLocation, NavLink, Redirect } from 'react-router-dom';

// Import local
import { generateLink } from 'src/Utils';
import ProductCard from 'src/components/ProductCard';
import Loader from '../Loader';
import CategoryNavBar from '../CategoryNavBar';

const PageCategory = ({ isCategoriesLoaded, categories, products, addToCart }) => {
  let currentProducts = [];
  let currentCategoryLink;
  const { pathname } = useLocation();
  const pathStructure = pathname.split('/');

  // Exclude tendance category from navBar
  const navCategories = categories.filter((category) => category.name !== "tendance");

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

  return (
    <>
      {!isCategoriesLoaded && <Loader />}
      {isCategoriesLoaded && typeof currentCategory === "undefined" && <Redirect to="/404" />}
      {typeof currentCategory !== "undefined" && <section className="CategoryPage">
        <CategoryNavBar categories={navCategories} />
        <div className="CategoryPage__banner">
          <img src={currentCategory.pictogram} className="CategoryPage__banner-img" alt={currentCategory.name} />
        </div>
        <nav className="CategoryPage__subCategory">
          <ul className="CategoryPage__subCategory-list">
            {currentCategory.childCategories.map((childCategory) => {
              const childCategoryLink = generateLink(childCategory.name);
              return (
                <li className="CategoryPage__subCategory-list-item" key={childCategory.id}>
                  <NavLink
                    to={`/${currentCategoryLink}/${childCategoryLink}`} className="CategoryPage__subCategory-list-item-link"
                    activeClassName="CategoryPage__subCategory-list-item-link--active"
                  >
                    <img src={childCategory.pictogram} alt="picto" className="CategoryPage__subCategory-list-item-link-img" />
                    <img src={childCategory.pictogram} alt="picto" className="CategoryPage__subCategory-list-item-link-back" />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="CategoryPage__product-list">
          {currentProducts.length > 0 && currentProducts.map((currentProduct) => (
            <ProductCard product={currentProduct} addToCart={addToCart} key={currentProduct.id} />
          ))}
          {currentProducts.length === 0 && <p className="CategoryPage__product-list-empty-message">
            Veuillez nous excuser, nous ne proposons aucun article dans cette catégorie.
          </p>}
        </div>
      </section>}
    </>
  );
};

export default PageCategory;
