import React from 'react';
import { categories } from 'src/data';

const Cart = ({ selectedOption, setSelectedOption }) => {

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
        <div className="Cart__proposal-product-list">
          <h2>
            Panier
          </h2>
        </div>
        <div className="Cart__proposal-choices">
          <h2 className="Cart__proposal-choices-title">
            Liste des alternatives
          </h2>
          {categories.map((place, index) => (
            <label htmlFor={`alt-option--${index}`} className="Cart__proposal-choices-option-btn" key={place.name}>
              {place.name}
            <input name="alt-option" id={`alt-option--${index}`} type="radio" value={index} onChange={setSelectedOption} />
            </label>
          ))}
          <div className="Cart__proposal-choices-tab">
            <h1 className="Cart__proposal-choices-tab-name">01</h1>
            <p className="Cart__proposal-choices-tab-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui illo distinctio non, adipisci aliquid, iste velit veniam atque quam eaque repudiandae nesciunt minima a possimus neque dolore tempore ab suscipit?
              Ducimus, atque, numquam qui quis rerum facere consectetur pariatur ipsum beatae, maiores natus quod a nostrum delectus reprehenderit aliquid ex dolorem ea repellat. Aliquam non nam repellat tempora libero repellendus.
              Beatae unde, quaerat saepe non quidem nobis aliquam culpa, tempora illo molestias cupiditate? Repellat, maiores. Expedita totam vitae debitis. Ullam, culpa. Dolor fugiat blanditiis officiis placeat? Asperiores aliquam incidunt inventore.
              Exercitationem quaerat harum dolorem earum nam tenetur tempore neque accusantium expedita nobis! Exercitationem corporis odio, earum iusto possimus at, magnam ab in laboriosam quo, dicta repudiandae minima ipsum deleniti voluptates.
              
            </p>
          </div>
          <button className="Cart__proposal-choices-link">
            Go to website
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
