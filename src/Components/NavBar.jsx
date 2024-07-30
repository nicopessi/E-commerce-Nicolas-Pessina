import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget, Logo} from "./CartWidget"
import data from "../data/products.json"
import { Link } from 'react-router-dom';


const modelo = data.map(item => item.model)
const uniqueModelo = new Set(modelo)


export const NavBar = () => (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><Logo /></Navbar.Brand>
          <Nav className="me-auto">
            {[...uniqueModelo].map(modelo => (
              <Nav.Link as={Link} to={`/model/${modelo}`} key={modelo}>
              {modelo}
            </Nav.Link>
            ))}
          </Nav>
          <Nav.Link href="#carrito"><CartWidget /></Nav.Link>
        </Container>
      </Navbar>



</>
  )