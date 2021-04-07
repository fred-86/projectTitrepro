// Import npm
import React, { useEffect } from 'react';

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
  const placesByProduct = places.filter((place) => {
    const placeSubCategoriesIndex = place.productCategories.map((productCategory) => (productCategory.id));

    return (placeSubCategoriesIndex.includes(selectedProduct));
  });

  const placesByCategory = placesByProduct.filter(
    (place) => (place.placeCategory.id === selectedPlaceCategory),
  );

  const categoriesByProduct = placeCategories.filter((placeCategory) => {
    const relatedCategories = placesByProduct.map((placeByProduct) => (placeByProduct.placeCategory.id));
    return relatedCategories.includes(placeCategory.id);
  });

  const setCurrentProduct = (event) => {
    setSelectedProduct(parseInt(event.target.value));
  };

  useEffect(() => {
    loadPlaceCategories();
    setHaveFound(false);

    return () => {
      setSelectedProduct(0);
    }
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
          <article className="Cart__proposal-list-content">
            {items.map((item, index) => {
              let checked;
              // Auto select the fisrt item when cart is display
              if (selectedProduct === 0 && index === 0) {
                checked = "checked";
                setSelectedProduct(item.product.productCategories[0].id);
              }

              return (
                <React.Fragment key={`item-id-${item.product.id}`}>
                  <input
                    type="radio"
                    name="Cart__proposal-list-item"
                    id={`Cart__proposal-list-item--${index}`}
                    className="Cart__proposal-list-content-item"
                    defaultChecked={checked}
                    value={item.product.productCategories[0].id}
                    onClick={setCurrentProduct}
                  />
                  <label
                    htmlFor={`Cart__proposal-list-item--${index}`}
                    className="Cart__proposal-list-content-label"
                    style={{ backgroundImage: `url(${item.product.images[0].url})` }}
                  >
                    <span>{item.product.name}</span>
                  </label>
                </React.Fragment>
              );
            })}
          </article>
        </div>
        <div className="Cart__proposal-choices">
          <div className="Cart__proposal-choices-header">
            <h2 className="Cart__proposal-choices-header-title">
              Liste des alternatives
            </h2>
            <div className="Cart__proposal-choices-header-options">
              {categoriesByProduct.map((categoryByProduct, index) => {
                let checked = '';

                if (index === 0) {
                  checked = 'checked';
                }

                return (
                  <React.Fragment key={categoryByProduct.name}>
                    <input
                      name="alt-option"
                      id={`alt-option--${index}`}
                      type="radio"
                      defaultChecked={checked}
                      value={categoryByProduct.id}
                      onChange={setSelectedPlaceCategory}
                    />
                    <label htmlFor={`alt-option--${index}`} className="Cart__proposal-choices-header-options-btn">
                      {categoryByProduct.name}
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="Cart__proposal-choices-tab">
            {placesByCategory.map((placeByCategory) => (
              <article className="Cart__proposal-choices-tab-content" key={placeByCategory.name}>
                <h1 className="Cart__proposal-choices-tab-content-name">{placeByCategory.name}</h1>
                <section>
                  <img src={placeByCategory.logo} alt={placeByCategory.name} className="Cart__proposal-choices-tab-content-logo" />
                  <ul className="Cart__proposal-choices-tab-content-address">
                    <li>{placeByCategory.address}</li>
                    <li>{`${placeByCategory.addressComplement}, ${placeByCategory.city}`}</li>
                    <li>
                      <a className="Cart__proposal-choices-tab-content-address-link" href={placeByCategory.url} target="_blank">
                        Visiter le site
                    </a>
                    </li>
                  </ul>
                </section>
              </article>
            ))}
            {placesByCategory.length === 0
              && <p>Veuillez nous excuser, nous n'avons trouvé aucune alternative pour ce produit.</p>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
