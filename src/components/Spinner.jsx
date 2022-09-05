import { InfinitySpin } from 'react-loader-spinner';
import { Container, Row } from 'react-bootstrap';

const Spinner = () => {
  return (
    <Container className='vh-100 d-flex justify-content-center bg-light align-items-center'>
      <Row>
        <InfinitySpin color='#212529' />
      </Row>
    </Container>
  );
};

export default Spinner;
