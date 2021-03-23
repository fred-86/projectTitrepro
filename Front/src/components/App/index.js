// == Import npm
import React from 'react';

// == Import local
import 'src/styles/index.scss';
import Header from '../Header/assistant';
import Cart from '../Cart/assistant';
import Page404 from '../404';
import MentionsLegales from '../MentionsLegales';
import Apropos from '../Apropos';
import Footer from '../Footer';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import PageCategory from '../PageCategory';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <main className="app__main-content">
      <Switch>
      <Route path="/category">
          <PageCategory />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/mentionslegales">
          <MentionsLegales />
        </Route>
        <Route path="/apropos">
          <Apropos />
        </Route>
        <Route path="/">
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

// == Export
export default App;
