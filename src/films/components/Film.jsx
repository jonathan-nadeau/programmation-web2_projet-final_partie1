import { useParams } from 'react-router-dom';
import FilmsService from '../service/FilmsService';
import CaracteresService from '../../caracteres/service/CaracteresService';
import StarshipsService from '../../starships/service/StarShipsService';
import VehiclesService from '../../vehicles/service/VehiclesService';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useGetData from '../../hooks/useGetData';

// Components
import CaracteresList from '../../caracteres/components/CaracteresList';
import StarshipsList from '../../starships/components/StarshipsList';
import VehiclesList from '../../vehicles/components/VehiclesList';
import Spinner from '../../components/Spinner';

const filmsService = new FilmsService();
const caracteresService = new CaracteresService();
const starshipsService = new StarshipsService();
const vehiclesService = new VehiclesService();

const Film = () => {
  const [film, setFilm] = useState(null);
  const { id } = useParams();
  const caracteres = useGetData(caracteresService.getPersonById.bind(caracteresService), film?.characters);
  const starships = useGetData(starshipsService.getStarshipById.bind(starshipsService), film?.starships);
  const vehicles = useGetData(vehiclesService.getVehicleById.bind(vehiclesService), film?.vehicles);

  const getFilmById = async (id) => {
    const data = await filmsService.getFilmById(id);
    if (data) {
      setFilm(data);
    } else {
      setFilm(null);
    }
  };

  useEffect(() => {
    getFilmById(id);
  }, [id]);

  if (film && caracteres && starships && vehicles) {
    return (
      <>
        <header className='py-5 bg-dark text-light'>
          <Container>
            <Row>
              <Col xs={12}>
                <h1 className='text-center mb-2'>{film.title}</h1>
                <h2 className='fw-light fs-3 text-center mb-5'>{`Episode ${film.episode_id}`}</h2>
              </Col>
              <Col sx={12}>
                <p className='text-center text-white-50 fs-5 lh-lg'>{film.opening_crawl}</p>
              </Col>
            </Row>
          </Container>
        </header>
        <main className='py-5 bg-dark text-light'>
          <CaracteresList caracteres={caracteres} />
          <StarshipsList starships={starships} />
          <VehiclesList vehicles={vehicles} />
        </main>
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default Film;
