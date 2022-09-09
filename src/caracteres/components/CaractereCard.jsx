import { Card, ListGroup } from 'react-bootstrap';

const CaractereCard = ({ caractere }) => {
  const { Header, Title, Subtitle } = Card;
  const { Item } = ListGroup;

  return (
    <Card text='dark' className='text-decoration-none h-100 shadow'>
      <Header>
        <Title as={'h2'}>{caractere.name}</Title>
        <Subtitle>{caractere.birth_year}</Subtitle>
        <ListGroup variant='flush'>
          <Item className='px-0'>
            <span className='fst-italic'>Gender : </span>
            <span className='fw-bold'>{caractere.gender}</span>
          </Item>
          <Item className='px-0'>
            <span className='fst-italic'>Home planet: </span>
            <span className='fw-bold'>Home planet</span>
          </Item>
        </ListGroup>
      </Header>
    </Card>
  );
};

export default CaractereCard;
