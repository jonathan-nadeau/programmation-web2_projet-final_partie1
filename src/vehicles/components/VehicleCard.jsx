import { Card, ListGroup } from 'react-bootstrap';

const VehicleCard = ({ vehicle }) => {
  const { Header, Title, Subtitle } = Card;
  const { Item } = ListGroup;

  return (
    <Card text='dark' className='text-decoration-none h-100 shadow'>
      <Header>
        <Title as={'h2'}>{vehicle.name}</Title>
        <Subtitle>{vehicle.vehicle_class}</Subtitle>
        <ListGroup variant='flush'>
          <Item className='px-0'>
            <span className='fst-italic'>Max atmosphering speed : </span>
            <span className='fw-bold'>{vehicle.max_atmosphering_speed}</span>
          </Item>
          <Item className='px-0'>
            <span className='fst-italic'>Cargo capacity : </span>
            <span className='fw-bold'>{vehicle.cargo_capacity}</span>
          </Item>
        </ListGroup>
      </Header>
    </Card>
  );
};

export default VehicleCard;
