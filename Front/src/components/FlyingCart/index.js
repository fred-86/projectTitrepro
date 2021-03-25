// Import npm
import React from 'react';
import classNames from 'classnames';

// Import local
import Item from './Item/assistant';

const FlyingCart = ({
  isOpened,
  setIsOpened,
  items,
  setProducts
}) => {
  const cartClass = classNames("FlyingCart", {"FlyingCart--open": isOpened});
  // TODO ajouter un voyant lumineux témoins d'un changement dans le panier
  return (
    <aside className={cartClass}>
      <h1>Mon panier</h1>
      <ul className="FlyingCart__product-list">
        {items.map((item, index) => (
          <li key={`item-${index}-${item.product.name}`}>
            <Item item={item} />
          </li>
        ))}
      </ul>
      <div className="FlyingCart__resume">
        <div className="FlyingCart__resume-logo">
          14 jours pour changer d’avis(3)<br/>
          Paiement en 4 fois possible<br/>
          Paiement sécurisé<br/>
        </div>
        <label htmlFor="FlyingCart__resume-dep">Département  </label>
        <select id="FlyingCart__resume-dep" className="FlyingCart__resume-dep">
          <option value="94">Val de Marne</option>
          <option value="86">Vienne</option>
          <option value="31">Occitanie</option>
        </select>
        <p className="FlyingCart__resume-total">Coût total : 450 €</p>
        <button type="button">Valider</button>
      </div>
    </aside>
  );
};

export default FlyingCart;
