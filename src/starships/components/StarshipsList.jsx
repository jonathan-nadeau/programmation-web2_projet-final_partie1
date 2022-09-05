import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//components

import StarshipCard from './StarshipCard';

const StarshipsList = ({ starships }) => {
  return (
    <main className='bg-dark text-light py-5'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center mb-5'>Starships</h1>
          </Col>
        </Row>
        <Row className='g-5'>
          {starships.map((starship) => {
            return (
              <Col xs={12} sm={6} lg={4} key={starship.name}>
                <Link className='text-decoration-none' to={`/starships/${starship.url.split('starships/')[1]}`}>
                  <StarshipCard starship={starship} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default StarshipsList;
