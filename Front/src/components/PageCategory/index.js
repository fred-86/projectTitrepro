// Import npm
import React, { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

// Import local
import ProductCard from 'src/components/ProductCard';
import Loader from '../Loader';
import CategoryNavBar from '../CategoryNavBar';
import mainImg from '../../assets/temp/vegetables.jpg';

const PageCategory = ({ isCategoriesLoaded, categories, products }) => {
  const { pathname } = useLocation();
  const pathStructure = pathname.split('/');
  let currentProducts = [];

  const currentCategory = categories.find((category) => (category.name === pathStructure[1]));

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
    currentProducts = products.filter(
      (product) => (product.productCategories[0].name === pathStructure[2]),
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            {!isCategoriesLoaded && <Loader />}
            {isCategoriesLoaded && currentCategory.childCategories.map(
              (childCategory) => (
                <li className="Pictogram__sub Pictogram__sub-1" key={childCategory.id}>
                  <NavLink to={`/${currentCategory.name}/${childCategory.name}`}>
                    <img src="#" alt="picto" />
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="ContainerSubCategoriesImg">
          {currentProducts.length > 0 && currentProducts.map((currentProduct) => (
            <ProductCard product={currentProduct} key={currentProduct.id} />
          ))}
          {currentProducts.length === 0 && <p className="ContainerSubCategoriesImg__empty-message">Veuillez nous excuser, nous ne proposons aucun article dans cette catégorie.</p>}
        </div>
      </section>
    </>
  );
};
export default PageCategory;
