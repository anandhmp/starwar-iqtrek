// Vehicle.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Vehicle() {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

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

  const indexOfLastVehicle = currentPage * 5;
  const indexOfFirstVehicle = indexOfLastVehicle - 5;
  const currentVehicles = vehiclesData.slice(indexOfFirstVehicle, indexOfLastVehicle);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      <div>
        <h2 className='text-center my-5'>Vehicles</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {currentVehicles.map(vehicle => (
              <Card key={vehicle.uid} className='my-4'>
                <Card.Body>
                  <Card.Title>{vehicle.name}</Card.Title>
                  <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-primary">Details</Link>
                </Card.Body>
              </Card>
            ))} 
            <nav>
              <ul className="pagination justify-content-center">
                {Array.from({ length: Math.ceil(vehiclesData.length / 5) }, (_, i) => (
                  <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                    <button onClick={() => paginate(i + 1)} className="page-link mt-3">
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
      <Button as={Link} to="/" className="mb-3" variant="primary">Back</Button>
    </Container>
  );
}

export default Vehicle;
