import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap'

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        const response = await axios.get('https://www.swapi.tech/api/planets/');
        setPlanets(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching planets:', error);
        setLoading(false);
      }
    }

    fetchPlanets();
  }, []);

  return (
    <Container>
        <div>
      <h1>Planets</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {planets.map(planet => (
            <li key={planet.uid}>
              <strong>{planet.name}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
    </Container>
  );
}

export default Planets;
