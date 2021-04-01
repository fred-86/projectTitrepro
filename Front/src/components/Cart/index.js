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
  setSelectedPlaceCategory,
  setHaveFound
}) => {
  const setCurrentProduct = (event) => {
    setSelectedProduct(parseInt(event.target.value));
  };

  const placesByProduct = places.filter((place) => {
    const placeSubCategoriesIndex = place.productCategories.map((productCategory) => (productCategory.id));

    return (placeSubCategoriesIndex.includes(selectedProduct));
  });

  const placesByCategory = placesByProduct.filter(
    (place) => (place.placeCategory.id === selectedPlaceCategory),
  );

  useEffect(() => {
    loadPlaceCategories();
    setHaveFound(false);
  }, []);

  return (
    <div className="Cart">
      <article className="Cart__intro">
        <h2 className="Cart__intro-title">Quelle(s) circuit(s) pour trouver mon produit ?</h2>
        <p className="Cart__intro-content">
          E-pako (contraction d’E-Pas-Commerce),  vous apporte un ensemble d’alternatives au canaux traditionnelles tout en respectant vos besoins de consommation.  
          Opter pour de la seconde main, du troc, des dons ou soutenir une association proche de chez vous, c’est possible ! A vous de choisir.
        </p>
      </article>
      <section className="Cart__proposal">
        <div className="Cart__proposal-list">
          <h2 className="Cart__proposal-list-title">
            Mon panier
          </h2>
          {items.map((item, index) => (
            <React.Fragment key={`item-id-${item.product.id}`}>
              <input
                type="radio"
                name="Cart__proposal-list-item"
                id={`Cart__proposal-list-item--${index}`}
                className="Cart__proposal-list-item"
                value={item.product.productCategories[0].id}
                onClick={setCurrentProduct}
              />
              <label
                htmlFor={`Cart__proposal-list-item--${index}`}
                className="Cart__proposal-list-label"
                style={{ backgroundImage: `url(${item.product.images[0].url})` }}
              >
                {item.product.name}
              </label>
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
                <h1 className="Cart__proposal-choices-tab-content-name">{placeByCategory.name}</h1>
                <img src={placeByCategory.logo} alt={placeByCategory.name} className="Cart__proposal-choices-tab-content-logo" />
                <ul className="Cart__proposal-choices-tab-content-adress">
                  <li>{placeByCategory.address}</li>
                  <li>{placeByCategory.addressComplement}</li>
                  <li>{`${placeByCategory.city}, ${placeByCategory.department.name}`}</li>
                </ul>
                <button className="Cart__proposal-choices-tab-content-link">
                  Visiter le site
                  </button>
              </article>
            ))}
            {placesByCategory.length === 0
              && <p>Veuillez nous excuser, nous n'avons trouvé aucune alternative pour ce produit dans cette catégorie.</p>
            }
          </div>

        </div>
      </section>
    </div>
  );
};

export default Cart;
