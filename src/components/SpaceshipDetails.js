import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SpaceshipDetails() {
  const { uid } = useParams();
  const [spaceship, setSpaceship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpaceshipDetails() {
      try {
        const response = await axios.get(`https://www.swapi.tech/api/starships/${uid}`);
        setSpaceship(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching spaceship details:', error);
        setLoading(false);
      }
    }

    fetchSpaceshipDetails();
  }, [uid]);

  return (
    <>
    <h1 className='text-center mt-4'>Details of Spaceship</h1>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card bg-dark text-light">
        <div className="card-body">
          <h2 className="card-title text-center">Spaceship Details</h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div>
              <p className="card-text">Name: {spaceship?.properties.name}</p>
              <p className="card-text">Model: {spaceship?.properties.model}</p>
              <p className="card-text">Manufacturer: {spaceship?.properties.manufacturer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    <Button as={Link} to="/spaceship" className="mb-3 ml-5" variant="primary">Back</Button>
    </>
  );
}

export default SpaceshipDetails;
