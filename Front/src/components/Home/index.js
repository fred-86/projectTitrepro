// Import npm
import React from 'react';

// Import local
import NavBar from '../NavBar';
import Burger2 from 'src/components/Burger2';

import Carrousel from '../Carrousel';

const Home = () => {
  return (
    <div className="Home">
      <Burger2 />
      <Carrousel />
      <Carrousel />
    </div>
  );
};

export default Home;
