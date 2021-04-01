import React from 'react';
import ePakoLogo from 'src/assets/images/ePaKo.svg';
import bannerAltCardImg from '../../assets/temp/imageAltDons.jpg';

const AltPageMobile = () => (
  /*
  <div className="AltPageMobile">
    <button className="Alt__back">&#60; Retour</button>
    <div className="Alt__picture"><img className="Alt__picture--pics"src="https://picsum.photos/id/28/400/400/"/></div>
    <div className="Alt__presentation">
      <h1 className="Alt__title">Distinctio</h1>
      <p className="Alt__description">Quia quia rem quisquam est et nisi qui voluptate soluta in facere ut esse alias tempore quasi harum non quisquam deserunt soluta.</p>
      <button className="Alt__link">Voir le site</button>
      <aside>
        <h2 className="Alt__address">Adresse</h2>
        <p className="Alt__address--text">15 rue de la Folie-Méricourt</p>
        <p className="Alt__address--text">75011 PARIS</p>
        <img className="Alt__address--map"></img>
      </aside>
      <hr className="Alt__hr"/>
      <div className="Alt__comment">
        <h2 className="Alt__comment--title">Commentaire</h2>
        <input className="Alt__input" placeholder="Votre avis nous intéresse !" />
      </div>
    </div>
  </div>
  */
  <section className="AltPageMobile">
    <div className="Alt__banner">
      <img className="Alt__bannerImg" src={bannerAltCardImg} alt="Dons" />
      <button classNamE="Alt__bannerBtn">back</button>
    </div>
    <div className="Alt__presentation">

      <div className="Alt__wrapper">
      
        <h1 className="Alt__title">Distinctio</h1>
        <p className="Alt__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis erat mauris, luctus a mattis et, laoreet sit amet nisi. Vestibulum vel eros at quam mattis efficitur. 
        Nulla commodo  nsectetur, mattis orci eu, varius erat. Maecenas dapibus euismod purus ut tincidunt. 
        Proin laoreet, 
        </p>

        <article className="Alt__adress">
          <h2 className="Alt__address--title">Adresse</h2>
          <p className="Alt__address--text">15 rue de la Folie-Méricourt</p>
          <p className="Alt__address--text">75011 PARIS</p>
        </article>

        <div className ="Alt__map">
          <img className="Alt__map--geoloc"></img>
          <button className="Alt__map--btn">Click Here</button>
        </div>

        <div className="Alt__comment">
          <h2 className="Alt__comment--title">Commentaire</h2>
          <input className="Alt__input" placeholder="Votre avis nous intéresse !" />
        </div>

      </div>
    </div>
  </section>
);
export default AltPageMobile;
