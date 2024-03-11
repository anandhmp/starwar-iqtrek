import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function VehicleDetails() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVehicle() {
      try {
        const response = await axios.get(`https://www.swapi.tech/api/vehicles/${id}`);
        setVehicle(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchVehicle();
  }, [id]);

  return (
    <>
      <h2 className="text-center my-5">Vehicles</h2>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="position-relative">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <Card style={{ width: '30rem' }} className='bg-dark text-white'>
              <Card.Body>
                <Card.Title>{vehicle ? vehicle.name : 'No Name'}</Card.Title>
              </Card.Body>
            </Card>
          )}
        </div>
      </Container>
      <Button as={Link} to="/vehicles" className="ml-5 mb-3" variant="primary">Back</Button>
    </>
  );
}

export default VehicleDetails;
