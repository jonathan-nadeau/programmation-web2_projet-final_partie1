import { Navbar as BSNavbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <BSNavbar bg='light' expand='lg'>
      <Container>
        <Link to={'/'} className='navbar-brand'>
          Starwars
        </Link>
        <BSNavbar.Toggle aria-controls='basic-navbar-nav' />
        <BSNavbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Item>
              <Link className='nav-link' to={'/films'}>
                Films
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to={'/caracteres'}>
                Characters
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to={'/starships'}>
                Starships
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to={'/vehicles'}>
                Vehicles
              </Link>
            </Nav.Item>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
