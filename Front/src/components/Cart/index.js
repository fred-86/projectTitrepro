// Import npm
import React, { useRef, useEffect } from 'react';
import { categories, cartProducts } from 'src/data';

const Cart = ({
  loadPlaceCategories,
  placeCategories,
  items,
  places,
  selectedProduct,
  setSelectedProduct,
  selectedPlaceCategory,
  setSelectedPlaceCategory
}) => {
  const setCurrentProduct = (event) => {
    setSelectedProduct(parseInt(event.target.value));
  };

  const placesByProduct = places.filter(
    (place) => (place.productCategories[1].id === selectedProduct),
  );

  const placesByCategory = placesByProduct.filter(
    (place) => (place.placeCategory.id === selectedPlaceCategory),
  );
console.log(placesByCategory);

  useEffect(() => {
    loadPlaceCategories();
  }, []);

  return (
    <div className="Cart">
      <article className="Cart__intro">
        <h2 className="Cart__intro-title">Texte principal pour décrire le concept du site</h2>
        <p className="Cart__intro-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi explicabo magni amet ipsam necessitatibus unde ratione nesciunt rerum doloremque possimus. Adipisci laborum atque incidunt ipsam fuga aspernatur at veritatis maiores.
          At repellat provident saepe asperiores ea necessitatibus, minus voluptatibus et soluta odit ducimus exercitationem qui tempora est vitae officiis hic id facere obcaecati aut incidunt! Doloremque nobis natus optio itaque.
        </p>
      </article>
      <section className="Cart__proposal">
        <div className="Cart__proposal-list">
          <h2 className="Cart__proposal-list-title">
            Panier
          </h2>
          {items.map((item, index) => (
            <React.Fragment key={`item-id-${item.product.id}`}>
              <label
                htmlFor={`Cart__proposal-list-item-${index}`}
                className="Cart__proposal-list-label"
                style={{ backgroundImage: `url(${item.product.images[0].url})` }}
              >
                {item.product.name}
              </label>
              <input
                type="radio"
                name="Cart__proposal-list-item"
                id={`Cart__proposal-list-item-${index}`}
                className="Cart__proposal-list-item"
                value={item.product.productCategories[0].id}
                onClick={setCurrentProduct}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="Cart__proposal-choices">
          <h2 className="Cart__proposal-choices-title">
            Liste des alternatives
          </h2>
          {placeCategories.map((placeCategory, index) => (
            <label htmlFor={`alt-option--${index}`} className="Cart__proposal-choices-option-btn" key={placeCategory.name}>
              {placeCategory.name}
            <input name="alt-option" id={`alt-option--${index}`} type="radio" value={placeCategory.id} onChange={setSelectedPlaceCategory} />
            </label>
          ))}
          <div className="Cart__proposal-choices-tab">
            {placesByCategory.map((placeByCategory) => (
              <article className="Cart__proposal-choices-tab-content" key={placeByCategory.name}>
                <h1 className="Cart__proposal-choices-tab-name">{placeByCategory.name}</h1>
                <ul className="Cart__proposal-choices-tab-adress">
                  <li>{placeByCategory.address}</li>
                  <li>{placeByCategory.addressComplement}</li>
                  <li>{`${placeByCategory.city}, ${placeByCategory.department.name}`}</li>
                </ul>
                <img src={placeByCategory.logo} alt={placeByCategory.name} />
                <button className="Cart__proposal-choices-link">
                  Go to website
                </button>
              </article>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Cart;
