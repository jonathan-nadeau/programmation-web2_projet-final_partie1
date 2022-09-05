import { Card, ListGroup } from 'react-bootstrap';
import useGetData from '../../hooks/useGetData';

const FilmCard = ({ film }) => {
  const { Header, Title, Subtitle, Body, Text } = Card;
  const { Item } = ListGroup;

  const homePlanet = useGetData();

  return (
    <Card text='dark' className='text-decoration-none h-100 shadow'>
      <Header>
        <Title as={'h2'}>{film.title}</Title>
        <Subtitle>{`Episode ${film.episode_id}`}</Subtitle>
        <ListGroup variant='flush'>
          <Item className='px-0'>
            <span className='fst-italic'>Released date : </span>
            <span className='fw-bold'>{film.release_date}</span>
          </Item>
          <Item className='px-0'>
            <span className='fst-italic'>Director : </span>
            <span className='fw-bold'>{film.director}</span>
          </Item>
        </ListGroup>
      </Header>
      <Body>
        <Text>{film.opening_crawl}</Text>
      </Body>
    </Card>
  );
};

export default FilmCard;
