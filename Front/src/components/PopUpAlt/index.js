import React from 'react';

const PopUpAlt = () => {


  return (
    <div className="popUpAlt">
      <button className="popUpAlt__button">
        X
      </button>
      <figure className="popUpAlt__picture" >
        <img src="#" alt="#" />
      </figure>
      <h1 className="popUpAlt__title">name</h1>
      <div className="popUpAlt__content">
        <section className="description">
          <p className="description__text">
            Maecenas sit amet tincidunt lacus, sit amet fermentum velit. Mauris fermentum massa rhoncus rhoncus sagittis. Integer consequat, purus vitae viverra elementum, enim nulla egestas erat, a placerat odio quam et nulla. Donec bibendum mauris eget nulla egestas rhoncus. <br />Praesent viverra efficitur tincidunt. Curabitur eget ipsum gravida, pulvinar ante sit amet, laoreet turpis. Pellentesque mauris purus, cursus a neque eu, rhoncus convallis tortor. Sed auctor nisl erat, sit amet pharetra arcu dictum in.
          </p>
          <a className="description__link" href="#">Voir le site</a>
        </section>
        <aside className="info">
          <h2 className="info__address">Adresse</h2>
          <p className="info__text">address</p>
          <p className="info__text">address Complement</p>
          <p className="info__text">department postalcode city</p>
          <img className="info__map"></img>
        </aside>
      </div>
      <hr className="popUpAlt__hr" />
      <div className="popUpAlt__comment">
        <h2 className="popUpAlt__comment-title">Comment</h2>
        <input className="popUpAlt__input" placeholder="Votre avis nous intéresse !" />
      </div>
    </div>
  );
};
export default PopUpAlt;
