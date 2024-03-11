import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PlanetDetail() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanet() {
      try {
        const response = await axios.get(`https://www.swapi.tech/api/planets/${id}`);
        setPlanet(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching planet data:', error);
        setLoading(false);
      }
    }

    fetchPlanet();
  }, [id]);

  return (
    <>
      <h2 className="text-center mt-3">Planet Details</h2>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Card className="bg-dark text-white" style={{ width: '30rem' }}>
              <Card.Body className="text-center">
                <Card.Title>{planet.properties.name}</Card.Title>
                <Card.Text>
                  Diameter: {planet.properties.diameter}<br />
                  Rotation Period: {planet.properties.rotation_period}<br />
                  Orbital Period: {planet.properties.orbital_period}<br />
                  Gravity: {planet.properties.gravity}<br />
                  Population: {planet.properties.population}<br />
                  Climate: {planet.properties.climate}<br />
                  Terrain: {planet.properties.terrain}<br />
                  Surface Water: {planet.properties.surface_water}<br />
                  Created: {planet.properties.created}<br />
                  Edited: {planet.properties.edited}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </Container>
      <Button as={Link} to="/planets" className="ml-5 mb-3" variant="primary">Back</Button>
    </>
  );
}

export default PlanetDetail;
