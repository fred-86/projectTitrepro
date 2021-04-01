// Import npm
import React, { useEffect } from 'react';

const Apropos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="Apropos">
      <article className="Apropos__article">
        <h1 className="Apropos__article-title">Genèse d’un projet :</h1>
        <h2 className="Apropos__article-title--2">Faire évoluer les réflexes du quotidien</h2>
        <p className="Apropos__article-content">
        <strong>E-Pas-Commerce</strong> (prononcé <em>“ipacommerce”</em>) est <strong>né d’un besoin altruiste</strong> : celui d’apporter, modestement sa pierre à l’édifice pour une société de plus en plus tournée vers ce que l’on appelait encore <em>“le monde d’après”</em>  il y a tout juste un an. 
        La révolution n’a pas eu lieu, c’est un fait, cependant certaines lignes bougent et nous voulons être acteur de ce changement.
        </p>
        <p className="Apropos__article-content">
        Avec <strong>E-PaKo</strong> (contraction d’<strong>E</strong>-<strong>Pa</strong>s-<strong>Co</strong>mmerce),  <strong>nous vous proposons un ensemble de solutions pour changer certaines habitudes de consommation</strong> héritées de notre quotidien ultra connecté. 
        La vente en ligne a pris un essor encore plus important avec la pandémie, faisant oublier qu’il existe d’autres façons de consommer.
        <ul>
          <li>&#8883; Favoriser une approche éco-responsable</li>
          <li>&#8883; Dépenser “malin” en soignant son budget</li>
          <li>&#8883; Encourager les commerces de proximité</li>
          <li>&#8883; Soutenir les initiatives sociales et solidaires</li>
        </ul>
        </p> 
        <p className="Apropos__article-content">
        Grâce à nos “vrai-faux” produits, n’achetez pas ! <strong>Découvrez plutôt de nouvelles alternatives proches de chez vous</strong> ou n’hésitez pas à nous faire part de vos trouvailles.<br/>
        <strong>Participez à votre échelle à un cet élan collectif</strong> et continuez à faire bouger les lignes avec nous.
        </p>    
        <p className="Apropos__article-content">
        L’équipe E-PaKo
        </p>               
      </article>
    </section>
  );
};

export default Apropos;
