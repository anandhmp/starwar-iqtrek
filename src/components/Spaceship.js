import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap'

function Spaceship() {
  const [spaceshipData, setSpaceshipData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpaceshipData() {
      try {
        const response = await axios.get('https://www.swapi.tech/api/starships/9');
        setSpaceshipData(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching spaceship data:', error);
        setLoading(false);
      }
    }

    fetchSpaceshipData();
  }, []);

  return (
    <Container>
        <div>
      <h2>Spaceship Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p><strong>Name:</strong> {spaceshipData.properties.name}</p>
          <p><strong>Model:</strong> {spaceshipData.properties.model}</p>
          <p><strong>Manufacturer:</strong> {spaceshipData.properties.manufacturer}</p>
          <p><strong>Cost in Credits:</strong> {spaceshipData.properties.cost_in_credits}</p>
        </div>
      )}
    </div>
    </Container>
  );
}

export default Spaceship;
