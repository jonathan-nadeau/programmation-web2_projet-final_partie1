import { useParams } from 'react-router-dom';
import StarshipsService from '../service/StarShipsService';
import FilmsService from '../../films/service/FilmsService';
import CaracteresService from '../../caracteres/service/CaracteresService';
import { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import useGetData from '../../hooks/useGetData';

// Components
import FilmsList from '../../films/components/FilmsList';
import CaracteresList from '../../caracteres/components/CaracteresList';
import Spinner from '../../components/Spinner';

const starshipsService = new StarshipsService();
const filmsService = new FilmsService();
const caracteresService = new CaracteresService();

const Starship = () => {
  const [starship, setStarship] = useState(null);
  const { id } = useParams();
  const films = useGetData(filmsService.getFilmById.bind(filmsService), starship?.films);
  const pilots = useGetData(caracteresService.getPersonById.bind(caracteresService), starship?.pilots);

  const { Item } = ListGroup;

  const getStarshipById = async (id) => {
    const data = await starshipsService.getStarshipById(id);
    if (data) {
      setStarship(data);
    } else {
      setStarship(null);
    }
  };

  useEffect(() => {
    getStarshipById(id);
  }, [id]);

  if (starship && films && pilots) {
    return (
      <>
        <header className='py-5 bg-dark text-light'>
          <Container>
            <Row>
              <Col xs={12}>
                <h1 className='text-center mb-2'>{starship.name}</h1>
                <h2 className='fw-light fs-3 text-center mb-5'>{starship.model}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ListGroup>
                  <Item>{`Manufacturer : ${starship.manufacturer}`}</Item>
                  <Item>{`Cargo capacity : ${starship.cargo_capacity}`}</Item>
                  <Item>{`Number of passengers : ${starship.passengers}`}</Item>
                  <Item>{`Max atmosphering speed : ${starship.max_atmosphering_speed}`}</Item>
                  <Item>{`Cost : ${starship.cost_in_credits} credits`}</Item>
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

export default Starship;
