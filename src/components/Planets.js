import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

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

  const indexOfLastPlanet = currentPage * 5;
  const indexOfFirstPlanet = indexOfLastPlanet - 5;
  const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      <div>
        <h1 className='text-center my-5'>Planets</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {currentPlanets.map(planet => (
              <Card key={planet.uid} className='my-4'>
                <Card.Body>
                  <Card.Title>{planet.name}</Card.Title>
                  <Link to={'/planet/' + planet.uid} className="btn btn-primary">View Details</Link>
                </Card.Body>
              </Card>
            ))}
            <nav>
              <ul className="pagination justify-content-center">
                {Array.from({ length: Math.ceil(planets.length / 5) }, (_, i) => (
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
      <Button as={Link} to="/" className="mb-3 " variant="primary">Back</Button>
    </Container>
  );
}

export default Planets;
