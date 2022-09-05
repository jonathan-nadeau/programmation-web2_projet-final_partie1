import { useParams } from 'react-router-dom';
import CaracteresService from '../service/CaracteresService';
import FilmsService from '../../films/service/FilmsService';
import StarshipsService from '../../starships/service/StarShipsService';
import VehiclesService from '../../vehicles/service/VehiclesService';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useGetData from '../../hooks/useGetData';

// Components
import FilmsList from '../../films/components/FilmsList';
import StarshipsList from '../../starships/components/StarshipsList';
import VehiclesList from '../../vehicles/components/VehiclesList';
import Spinner from '../../components/Spinner';

const caracteresService = new CaracteresService();
const filmsService = new FilmsService();
const starshipsService = new StarshipsService();
const vehiclesService = new VehiclesService();

const Caractere = () => {
  const [caractere, setCaractere] = useState(null);
  const { id } = useParams();
  const films = useGetData(filmsService.getFilmById.bind(filmsService), caractere?.films);
  const vehicles = useGetData(vehiclesService.getVehicleById.bind(vehiclesService), caractere?.vehicles);
  const starships = useGetData(starshipsService.getStarshipById.bind(starshipsService), caractere?.starships);

  const getCaractereById = async (id) => {
    const data = await caracteresService.getPersonById(id);
    if (data) {
      setCaractere(data);
    } else {
      setCaractere(null);
    }
  };

  useEffect(() => {
    getCaractereById(id);
  }, [id]);

  if (caractere && films && vehicles && starships) {
    return (
      <>
        <header className='py-5 bg-dark text-light'>
          <Container>
            <Row>
              <Col xs={12}>
                <h1 className='text-center mb-2'>{caractere.name}</h1>
                <h2 className='fw-light fs-3 text-center mb-5'>{caractere.birth_year}</h2>
              </Col>
            </Row>
          </Container>
        </header>
        <FilmsList films={films} />
        <StarshipsList starships={starships} />
        <VehiclesList vehicles={vehicles} />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default Caractere;
