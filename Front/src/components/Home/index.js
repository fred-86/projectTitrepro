// Import npm
import React from 'react';

// Import local
import NavBar from '../NavBar';
import Carrousel from '../Carrousel';

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <Carrousel />
      <Carrousel />
      <Carrousel />
      <Carrousel />
    </div>
  );
};

export default Home;
