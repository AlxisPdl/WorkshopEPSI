import React from 'react';
import graphique from '../Assets/graphique1.jpg';
import fallout from '../Assets/falloutguy.png';
import Card from '../Components/Cardavis';
import Footer from '../Components/Footer';


export default function HomePage() {
     return (
    <div>
      <div className='section'>
      <aside>
        <img className='graphique' src={graphique} alt="graphique" />
        <img className='falloutguy' src={fallout} alt="falloutguy" />
      </aside>
      <header>
        <h2>Poseidon Pulse, La solution de gestion de vos fonds marins</h2>
        <p>Bienvenue dans l'univers captivant de Solution Poséidon, où la technologie rencontre la préservation. 
          Notre mission est de révolutionner la manière dont nous comprenons et gérons les ressources marines. 
          Grâce à notre système innovant, nous vous offrons un aperçu précieux des profondeurs, 
          en collectant des données sur les populations de poissons, la qualité de l'eau, la température et bien plus encore</p>
        <button> <a href=""></a>En savoir plus</button>
      </header>
      </div>
      <body>
      <hr />
      <div className='body_text'>
       <h3> Nos recommandations </h3>
       <p>Un rayonnement d'expertise et d'excellence à l'internationnal.</p>
       </div>
       <div className='cards'>
        <Card />
        <Card />
        <Card />
       </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

