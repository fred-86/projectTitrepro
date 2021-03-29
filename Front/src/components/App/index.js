// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import local
import 'src/styles/index.scss';
import Header from '../Header/assistant';
import Cart from '../Cart/assistant';
import Page404 from '../404';
import Loader from '../Loader';
import Home from '../Home/assistant';
import AltHome from '../AltHome';
import PageCategory from '../PageCategory/assistant';
import ProductPage from '../ProductPage/assistant';
import MentionsLegales from '../MentionsLegales';
import Apropos from '../Apropos';
import Footer from '../Footer';

// == Composant
const App = ({ loadCategory, categories, loadProducts }) => {
  useEffect(() => {
    loadCategory();
    loadProducts();
  }, []);

  const categoryPaths = [];

  categories.forEach((category) => {
    categoryPaths.push(`/${category.name}`);

    category.childCategories.forEach((childCategory) => {
      categoryPaths.push(`/${category.name}/${childCategory.name}`);
    });
  });

  return (
    <div className="App">
      <Header categoryPaths={categoryPaths} />
      <Loader />
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
          <Route path="/althome">
            <AltHome />
          </Route>
          <Route path="/mentionslegales">
            <MentionsLegales />
          </Route>
          <Route path="/apropos">
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
