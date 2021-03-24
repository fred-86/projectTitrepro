// Import npm
import React from 'react';

// Import local
import NavBar from '../NavBar';
import Carrousel from '../Carrousel';

const Home = ({ displayedCategory, setDisplayedCategory }) => {
  const handlesSwitchCategory = (event) => {
    const newDisplayedCategory = (
      event.target.value === 'left'
        ? displayedCategory - 1
        : displayedCategory + 1
    );
    setDisplayedCategory(newDisplayedCategory);
  };

  return (
    <div className="Home">
      <NavBar />
      <div className="Home__content">
        <Carrousel />
        <Carrousel />
        <Carrousel />
        <Carrousel />
      </div>
      <button type="button" onClick={handlesSwitchCategory} value="left">left</button>
      <button type="button" onClick={handlesSwitchCategory} value="right">right</button>
    </div>
  );
};

export default Home;
