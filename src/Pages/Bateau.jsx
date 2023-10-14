import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function formatDateTime(dateTimeString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateTimeString).toLocaleDateString('fr-FR', options);
  }

  useEffect(() => {
    // Remplacez l'URL ci-dessous par l'URL de votre API
    const apiUrl = 'http://192.168.1.81:8080/peche';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Liste des données</h1>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <ul>
          {data.map(item => (
            <li className='table' key={item.id}>
              <h2 className='nom' >{item.nom}</h2>
              <img src={item.img} alt={item.nom} />
              <p>Expéditions :</p>
              <ul className='date' >
                {item.expeditions.map(expedition => (
                  <li key={expedition.id}>
                  Date de départ : {formatDateTime(expedition.date_depart)}<br />
                  Date d'arrivée : {formatDateTime(expedition.date_arriver)}
                </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
