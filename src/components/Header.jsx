import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  { Link } from 'react-router-dom'
export function Header() {
  return (
    <Navbar fixed='top' variant='dark' bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>Suculentas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/queson'}>¿Que son?</Nav.Link>
            <Nav.Link as={Link} to={'/comocuidar'}>¿como cuidar?</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
