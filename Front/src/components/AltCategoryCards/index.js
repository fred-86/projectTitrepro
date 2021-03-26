import React from 'react';
import {altCardsData} from 'src/data';
import { v4 as uuidv4 } from 'uuid';

const AltCategoryCard = ({altCardData}) => {
  return(
      <div className="AltCategoryCards">
        <img className="AltCategoryCards__img" src={altCardData.image}/>
        <h2 className="AltCategoryCards__categoryTitle">Dons</h2>
        <h2 className="AltCategoryCards__title">title</h2>
        <p className="AltCategoryCards__adresse">Adresse</p>
      </div>
  );
};
const AltCategoryCards = () => {
  return (
    <section className="ContainerAltCategoryCards">
      {altCardsData.map(altCardData=> <AltCategoryCard key={uuidv4()} altCardData={altCardData}/>)}
    </section>
  )
};
export default AltCategoryCards
