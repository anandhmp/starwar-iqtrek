import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap'

function Vehicle() {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVehiclesData() {
      try {
        const response = await axios.get('https://www.swapi.tech/api/vehicles');
        setVehiclesData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching vehicles data:', error);
        setLoading(false);
      }
    }

    fetchVehiclesData();
  }, []);

  return (
    <Container>
    <div>  
      <h2>Vehicles</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {vehiclesData.map(vehicle => (
            <li key={vehicle.uid}>{vehicle.name}</li>
          ))}
        </ul>
      )}
    </div>
    </Container>
  );
}

export default Vehicle;
