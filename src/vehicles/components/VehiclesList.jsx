import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//components

import VehicleCard from './VehicleCard';

const VehiclesList = ({ vehicles }) => {
  return (
    <main className='bg-dark text-light py-5'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center mb-5'>Vehicles</h1>
          </Col>
        </Row>
        <Row className='g-5'>
          {vehicles.map((vehicle) => {
            return (
              <Col xs={12} sm={6} lg={4} key={vehicle.name}>
                <Link className='text-decoration-none' to={`/vehicles/${vehicle.url.split('vehicles/')[1]}`}>
                  <VehicleCard vehicle={vehicle} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default VehiclesList;
