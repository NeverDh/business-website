import React from 'react';
import { Navbar, Nav, NavDropdown, Offcanvas, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Header.css'; // Crie este arquivo para estilos personalizados

function Header() {
  return (
    <>
      <Navbar key="lg" bg="white" expand="lg" fixed="top" className="custom-navbar d-flex">
        <Container fluid>
          <Navbar.Brand href="#home" className="custom-brand">
            Teleprompter <span className="carioca">carioca</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 custom-nav">
                <Nav.Link as={Link} to="home" smooth={true} duration={500} className="custom-nav-link" onClick={() => document.querySelector('.navbar-toggler').click()}>PÁGINA INICIAL</Nav.Link>
                <Nav.Link as={Link} to="products" smooth={true} duration={500} className="custom-nav-link" onClick={() => document.querySelector('.navbar-toggler').click()}>PRODUTOS</Nav.Link>
                <Nav.Link as={Link} to="whoWeWare" smooth={true} duration={500} className="custom-nav-link" onClick={() => document.querySelector('.navbar-toggler').click()}>QUEM SOMOS</Nav.Link>
                <Nav.Link as={Link} to="depositions" smooth={true} duration={500} className="custom-nav-link" onClick={() => document.querySelector('.navbar-toggler').click()}>DEPOIMENTOS</Nav.Link>
                <Nav.Link as={Link} to="services" smooth={true} duration={500} className="custom-nav-link" onClick={() => document.querySelector('.navbar-toggler').click()}>SERVIÇOS</Nav.Link>
                <Nav.Link as={Link} to="contact" smooth={true} duration={500} className="custom-nav-link" onClick={() => document.querySelector('.navbar-toggler').click()}>CONTATO</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
