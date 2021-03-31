// Import npm
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

// Import local
import AltCategoryNavBar from '../AltCategoryNavBar';
import AltCategoryCards from '../AltCategoryCards';
import bannerImg from '../../assets/temp/forest.jpg';
import PopUpAlt from '../PopUpAlt';

const AltHome = ({ token, loadPlaceCategories, placeCategories, loadPlaces, places, selectedPlace, setSelectedPlace }) => {
  const { id } = useParams();
  const placesByCategory = parseInt(id) === 0 ? places : places.filter((place) => (place.placeCategory.id === parseInt(id)));

  useEffect(() => {
    if (token !== '') {
      loadPlaceCategories();
      loadPlaces();
    }
  }, [token]);

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
        <AltCategoryNavBar placeCategories={placeCategories} />
        <AltCategoryCards places={placesByCategory} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
      </section>
    </React.Fragment>
  );
};

export default AltHome
