import { Card, ListGroup } from 'react-bootstrap';

const StarshipCard = ({ starship }) => {
  const { Header, Title, Subtitle } = Card;
  const { Item } = ListGroup;

  return (
    <Card text='dark' className='text-decoration-none h-100 shadow'>
      <Header>
        <Title as={'h2'}>{starship.name}</Title>
        <Subtitle>{starship.starship_class}</Subtitle>
        <ListGroup variant='flush'>
          <Item className='px-0'>
            <span className='fst-italic'>Max atmosphering speed : </span>
            <span className='fw-bold'>{starship.max_atmosphering_speed}</span>
          </Item>
          <Item className='px-0'>
            <span className='fst-italic'>Cargo capacity : </span>
            <span className='fw-bold'>{starship.cargo_capacity}</span>
          </Item>
        </ListGroup>
      </Header>
    </Card>
  );
};

export default StarshipCard;
