import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget, Logo} from "./CartWidget"
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';





export const NavBar = () => {
return (
  <Navbar bg="primary" data-bs-theme="dark" style={{display: 'flex', justifyContent: 'space-between',}}>
      <Container>
          <Navbar.Brand as={Link} to="/">
          <Logo />
          </Navbar.Brand >
          <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/Dji%20Air"> DJI AIR </NavDropdown.Item>
              <NavDropdown.Item href="/category/DJI%20Mini">
                DJI MINI
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Enterprise">ENTERPRISE</NavDropdown.Item>
              <NavDropdown.Item href="/category/FPV">DJI FPV</NavDropdown.Item>
              <NavDropdown.Item href="/Category/Accesories">ACCESORIES</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                ALL PRODUCTS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/QuienesSomos">
          WHO WE ARE
          </Nav.Link>
          <Nav.Link as={NavLink} to="/ContactUs">
          CONTACT
          </Nav.Link>
          
          <Nav.Link href="#carrito"><CartWidget /></Nav.Link>
      </Container>
  </Navbar>
)};