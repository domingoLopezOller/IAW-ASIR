import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoHomeSharp } from "react-icons/io5";
import { FcServices } from "react-icons/fc";
import { RiContactsFill } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navigation2() {
  return (
    <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> IAW </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"><IoHomeSharp color='blue' fontSize={25}/> Inicio</Nav.Link>
            <Nav.Link href="/fotos"><FaPhotoVideo color='orange' fontSize={25}/> Fotos </Nav.Link>
            <Nav.Link href="/contacto"><RiContactsFill color='red' fontSize={25}/> Contactos </Nav.Link>
            <NavDropdown title="Noticias" >
              <NavDropdown.Item><Link to="/news/jefatura"><FaRegNewspaper fontSize={25}/> Jefatura</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/news/igualdad"><FcServices fontSize={25}/> Igualdad</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation2;