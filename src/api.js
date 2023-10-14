import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Effectuez votre appel API ici
    fetch('http://192.168.1.81:8080/peche') // Remplacez cette URL par l'URL de votre API
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
