import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Component
import FilmCard from './FilmCard';

const FilmsList = ({ films }) => {
  return (
    <main className='bg-dark text-light py-5'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center mb-5'>Films</h1>
          </Col>
        </Row>
        <Row className='g-5'>
          {films.map((film) => {
            return (
              <Col xs={12} sm={6} lg={4} key={film.title}>
                <Link className='text-decoration-none' to={`/films/${film.episode_id}`}>
                  <FilmCard film={film} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default FilmsList;
