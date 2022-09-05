import { useParams } from 'react-router-dom';
import VehiclesService from '../service/VehiclesService';
import FilmsService from '../../films/service/FilmsService';
import CaracteresService from '../../caracteres/service/CaracteresService';
import { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import useGetData from '../../hooks/useGetData';

// Components
import FilmsList from '../../films/components/FilmsList';
import CaracteresList from '../../caracteres/components/CaracteresList';
import Spinner from '../../components/Spinner';

const vehiclesService = new VehiclesService();
const filmsService = new FilmsService();
const caracteresService = new CaracteresService();

const Vehicle = () => {
  const [vehicle, setVehicle] = useState(null);
  const { id } = useParams();
  const films = useGetData(filmsService.getFilmById.bind(filmsService), vehicle?.films);
  const pilots = useGetData(caracteresService.getPersonById.bind(caracteresService), vehicle?.pilots);

  const { Item } = ListGroup;

  const getVehicleById = async (id) => {
    const data = await vehiclesService.getVehicleById(id);
    if (data) {
      setVehicle(data);
    } else {
      setVehicle(null);
    }
  };

  useEffect(() => {
    getVehicleById(id);
  }, [id]);

  if (vehicle && films && pilots) {
    return (
      <>
        <header className='py-5 bg-dark text-light'>
          <Container>
            <Row>
              <Col xs={12}>
                <h1 className='text-center mb-2'>{vehicle.name}</h1>
                <h2 className='fw-light fs-3 text-center mb-5'>{vehicle.model}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ListGroup>
                  <Item>{`Manufacturer : ${vehicle.manufacturer}`}</Item>
                  <Item>{`Cargo capacity : ${vehicle.cargo_capacity}`}</Item>
                  <Item>{`Number of passengers : ${vehicle.passengers}`}</Item>
                  <Item>{`Max atmosphering speed : ${vehicle.max_atmosphering_speed}`}</Item>
                  <Item>{`Cost : ${vehicle.cost_in_credits} credits`}</Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </header>
        <FilmsList films={films} />
        <CaracteresList caracteres={pilots} />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default Vehicle;
