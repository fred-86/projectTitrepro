/* eslint-disable arrow-body-style */
import React from 'react';

const ProductPage = () => {
  return (
    <div className="ProductPage">
      <nav className="navBar">
        <ul className="navBar__list">
          <li className="navBar__list-link">High tech</li>
          <li className="navBar__list-link">Electromenager</li>
          <li className="navBar__list-link">Alimentaire</li>
          <li className="navBar__list-link">Mobilier/Décoration</li>
          <li className="navBar__list-link">Habillement</li>
        </ul>
      </nav>
      <section className="description">
        <aside className="description__pictures">
          <div className="description__pictures-main">
            Main Picture
          </div>
          <div className="description__pictures-alt">
            <div className="description__pictures-alt-item">
              alt picture 1
            </div>
            <div className="description__pictures-alt-item">
              alt picture 2
            </div>
            <div className="description__pictures-alt-item">
              alt picture 3
            </div>
          </div>
        </aside>
        <article className="description__details">
          <h1 className="description__details-title">
            Product name  
          </h1>
          <p className="description__details-compagny">
            By <strong>compagny name</strong>
          </p>
          <div>
            <p className="description__details-price">
              <span className="description__details-price-amount">
                35$
              </span> 
              <span className="description__details-price-save">
                Save 85%
              </span>  
            </p>
          </div>
          <p className="description__details-resume">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium fugiat, at ut quo possimus nesciunt eius et velit illo quidem delectus quod beatae cupiditate porro minima aliquam. Eius, neque!
            Natus debitis incidunt obcaecati error reprehenderit explicabo et? Laborum, culpa deserunt. Beatae, ea deleniti? Necessitatibus quasi, ex tempore possimus fugiat nostrum neque qui eaque reprehenderit delectus quis saepe perspiciatis omnis.
            Ex, corporis. Commodi eos, voluptas error vel magnam rem ex harum facilis doloremque praesentium, consequatur a aliquid. Facere recusandae possimus error porro at? Dignissimos optio officia numquam, molestiae alias blanditiis!
          </p>
          <div className="description__details-cart">
            <div className="description__details-cart-quantity">
              <label htmlFor="description__details-cart-quantity-amount" className="description__details-cart-quantity-label">
                Quantité
              </label>
              <select className="description__details-cart-quantity-amount" id="description__details-cart-quantity-amount">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <button className="description__details-cart-btn">
              Ajouter
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ProductPage;
