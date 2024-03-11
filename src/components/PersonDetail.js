import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 

function PersonDetail() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPerson() {
      try {
        const response = await axios.get(`https://www.swapi.tech/api/people/${id}`);
        setPerson(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching person data:', error);
        setLoading(false);
      }
    }

    fetchPerson();
  }, [id]);

  return (
    <>
    <h2 className="text-center mt-3">Details of Person</h2>
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Card className='bg-dark text-white align-items-center' style={{ width: '30rem', height:'15rem' }}>
            <Card.Body>
              <Card.Title>{person.name}</Card.Title>
              <Card.Text>
                Gender: {person.properties.gender}<br />
                Height: {person.properties.height}
              </Card.Text>
              {/* Add more details here */}
            </Card.Body>
          </Card>
        )}
      </div>
    </Container>
    <Button as={Link} to="/people" className=" mx-5 mb-3" variant="primary">Back</Button>
    </>
  );
}

export default PersonDetail;
