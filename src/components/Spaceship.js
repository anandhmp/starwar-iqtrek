import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Spaceship() {
  const [spaceships, setSpaceships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);

  useEffect(() => {
    async function fetchSpaceships() {
      try {
        const response = await axios.get('https://www.swapi.tech/api/starships/');
        setSpaceships(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching spaceship data:', error);
        setLoading(false);
      }
    }

    fetchSpaceships();
  }, []);

  
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentSpaceships = spaceships.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      <div>
        <h1 className='text-center my-5'>Spaceships</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {currentSpaceships.map(spaceship => (
              <Card key={spaceship.uid} className='my-4'>
                <Card.Body>
                  <Card.Title>{spaceship.name}</Card.Title>
                  <Link to={`/spaceship/${spaceship.uid}`} className="btn btn-primary">View Details</Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
        {/* Pagination */}
        <nav>
          <ul className='pagination justify-content-center'>
            {[...Array(Math.ceil(spaceships.length / cardsPerPage)).keys()].map(number => (
              <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                <Button onClick={() => paginate(number + 1)} className='page-link'>
                  {number + 1}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Button as={Link} to="/" className="mb-3" variant="primary">Back</Button>
    </Container>
  );
}

export default Spaceship;
