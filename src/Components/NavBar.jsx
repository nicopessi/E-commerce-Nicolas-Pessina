import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"

export const NavBar = () => (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">DroneShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Air</Nav.Link>
            <Nav.Link href="#features">FPV</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
          </Nav>
          <Nav.Link href="#carrito"><CartWidget /></Nav.Link>
        </Container>
      </Navbar>



</>
  )