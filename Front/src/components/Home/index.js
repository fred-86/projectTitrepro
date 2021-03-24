// Import npm
import React from 'react';

// Import local
import NavBar from '../NavBar';
import Burger from 'src/components/Burger';

import Carrousel from '../Carrousel';

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <Burger />
      <Carrousel />
      <Carrousel />
    </div>
  );
};

export default Home;
