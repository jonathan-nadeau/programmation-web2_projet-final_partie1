import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//components

import CaractereCard from './CaractereCard';

const CaracteresList = ({ caracteres }) => {
  return (
    <main className='bg-dark text-light py-5'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center mb-5'>Caracteres</h1>
          </Col>
        </Row>
        <Row className='g-5'>
          {caracteres.map((caractere) => {
            return (
              <Col xs={12} sm={6} lg={4} key={caractere.name}>
                <Link className='text-decoration-none' to={`/caracteres/${caractere.url.split('people/')[1]}`}>
                  <CaractereCard caractere={caractere} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default CaracteresList;
