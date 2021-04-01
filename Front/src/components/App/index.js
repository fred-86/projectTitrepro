// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import local
import 'src/styles/index.scss';
import Header from '../Header/assistant';
import Cart from '../Cart/assistant';
import Page404 from '../404';
import Home from '../Home/assistant';
import AltHome from '../AltHome/assistant';
import AltPageMobile from '../AltPageMobile/assistant';
import PageCategory from '../PageCategory/assistant';
import ProductPage from '../ProductPage/assistant';
import MentionsLegales from '../MentionsLegales';
import Apropos from '../Apropos';
import Footer from '../Footer';
import PopUp from '../PopUp/assistant';
import { generateLink } from 'src/Utils';

// == Component
const App = ({ getToken, token, loadCategory, categories, loadProducts }) => {
  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    if (token !== '') {
      loadCategory();
      loadProducts();
    }
  }, [token]);

  const categoryPaths = [];

  categories.forEach((category) => {
    const categoryLink = generateLink(category.name);
    categoryPaths.push(`/${categoryLink}`);

    category.childCategories.forEach((childCategory) => {
      const childCategoryLink = generateLink(childCategory.name);
      categoryPaths.push(`/${categoryLink}/${childCategoryLink}`);
    });
  });

  return (
    <div className="App">
      <PopUp />
      <Header categoryPaths={categoryPaths} />
      <main className="App__main-content">
        <Switch>
          <Route exact path={categoryPaths}>
            <PageCategory />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/practical/category/:id">
            <AltHome />
          </Route>
          <Route path="/practical/place/:id">
            <AltPageMobile />
          </Route>
          <Route path="/mentions-legales">
            <MentionsLegales />
          </Route>
          <Route path="/a-propos">
            <Apropos />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

// == Export
export default App;
