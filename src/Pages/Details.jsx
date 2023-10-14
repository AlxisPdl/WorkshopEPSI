import React from 'react'
import Map from '../Assets/heatmap.png'
import Module1 from '../Assets/module1.png'
import Module2 from '../Assets/module2.png'

export default function Details() {
  return (
    <div>
        <h1 className='details_title'>Nous Étudions la mer pour vous!</h1>
        <aside className='images'>
        <img className="heatmap" src={Map} alt="heatmap" />
        <img className="module1"src={Module1} alt="module" />
        <img className='module2' src={Module2} alt="module" />
        </aside>
        <body>
        <div className="details">
          <p className='details__texte'>
          Le contrôle de la qualité de l'eau et de sa population est essentiel pour la régulation de l'écosystème aquatique. Cette démarche repose sur l'utilisation de bateaux équipés d'échosondeurs et d'appareils de mesure de la qualité de l'eau. 
          Ces dispositifs permettent de recueillir des données précises sur la densité des poissons et la composition chimique de l'eau. 
          Ces informations sont ensuite utilisées pour calculer les quotas de pêche autorisés dans la région, garantissant ainsi la durabilité des ressources halieutiques.
          <br />
          <br />
          
          En régulant la pêche de manière plus précise grâce à ces données, on peut éviter la surpêche et préserver l'équilibre de l'écosystème aquatique. Cette approche contribue également à la protection de la biodiversité et au maintien de la santé des écosystèmes aquatiques, tout en assurant la disponibilité continue de poissons pour les générations futures.
           Ainsi, l'utilisation de bateaux équipés d'échosondeurs et d'appareils de mesure de la qualité de l'eau joue un rôle crucial dans la gestion durable des ressources aquatiques.
          </p>
          </div>
        </body>
   </div>
    )
}
