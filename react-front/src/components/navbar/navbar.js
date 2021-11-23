import React from 'react';
import { Navbar, Container, NavDropdown, Offcanvas, Nav } from 'react-bootstrap';
import './navbar.css'

export default class Menu extends React.Component {
  constructor(props) {
  super(props);
  this.state = {}
  }
  render() {
     return (
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Brand href="#">Health Control</Navbar.Brand>
            <Navbar.Brand href="#">Cerrar Sesión</Navbar.Brand>
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Inicio</Nav.Link>
                <Nav.Link href="/about">Acerca de</Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link href="/login">Inicio Sesión</Nav.Link>
                <NavDropdown.Divider />
                <NavDropdown title="Usuarios" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="/perfilUsuario">Perfíl Usuario</NavDropdown.Item>
                    <NavDropdown.Item href="/tomaPresion">Toma de Presión</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="Medicos" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="/perfilMedico">Perfíl Médico</NavDropdown.Item>
                    <NavDropdown.Item href="/consultaPresion">Consulta Tomas Presión</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown.Divider />
                <Nav.Link href="/consejos">Consejos</Nav.Link>
                <Nav.Link href="/tips">Tips</Nav.Link>
            </Nav>
            </Offcanvas.Body>
                    </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
  }
}
