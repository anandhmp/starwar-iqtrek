// People.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function People() {
  const [peopleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPeopleData() {
      try {
        const response = await axios.get('https://www.swapi.tech/api/people');
        setPeopleData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching people data:', error);
        setLoading(false);
      }
    }

    fetchPeopleData();
  }, []);

  const indexOfLastPerson = currentPage * 5;
  const indexOfFirstPerson = indexOfLastPerson - 5;
  const currentPeople = peopleData.slice(indexOfFirstPerson, indexOfLastPerson);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      <div>
        <h2 className='text-center my-5' >People</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {currentPeople.map(person => (
              <Card key={person.uid} className='my-4'>
                <Card.Body>
                  <Card.Title>{person.name}</Card.Title>
                  {/* Use Link to redirect to the PersonDetail page */}
                  <Link to={`/person/${person.uid}`} className="btn btn-primary">Details</Link>
                </Card.Body>
              </Card>
            ))}
            <nav>
              <ul className="pagination justify-content-center">
                {Array.from({ length: Math.ceil(peopleData.length / 5) }, (_, i) => (
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

export default People;
