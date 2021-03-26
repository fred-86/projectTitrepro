import React from 'react';
import AltCategoryNavBar from '../AltCategoryNavBar';
import AltCategoryCards from '../AltCategoryCards';
import bannerImg from '../../assets/temp/forest.jpg';

const AltHome = () => {
  return (
    <React.Fragment>
     <section className="AltHome">
      <div className="AltHome__banner">
        <img className="AltHome__banner-img" src={bannerImg} alt="forest" />
        <article className="AltHome__banner-article">
          <h1 className="AltHome__banner-title"> Title </h1>
          <p className="AltHome__banner-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna diam, 
          sagittis vel enim eu, scelerisque ullamcorper mi. Suspendisse interdum libero sit amet porta ultrices. 
          Sed tempor risus at ligula ullamcorper, ac consectetur libero posuere.
          </p>
        </article>
      </div>
      <AltCategoryNavBar />
      <AltCategoryCards />
     </section>
    </React.Fragment>
  );
};

export default AltHome
