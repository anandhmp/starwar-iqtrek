import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap'


function People() {
  const [peopleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
   <Container>
     <div>
      <h2>People</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {peopleData.map(person => (
            <li key={person.uid}>{person.name}</li>
          ))}
        </ul>
      )}
    </div>
   </Container>
  );
}

export default People;
