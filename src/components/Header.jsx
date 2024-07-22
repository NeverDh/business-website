import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Header.css'; // Crie este arquivo para estilos personalizados

function Header() {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="custom-navbar d-flex">
      <Navbar.Brand href="#home" className="custom-brand">
        Teleprompter <span className="carioca">carioca</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto custom-nav">
          <Nav.Link as={Link} to="home" smooth={true} duration={500} className="custom-nav-link">PÁGINA INICIAL</Nav.Link>
          <div className="separator">|</div>
          <Nav.Link as={Link} to="products" smooth={true} duration={500} className="custom-nav-link">PRODUTOS</Nav.Link>
          <div className="separator">|</div>
          <Nav.Link as={Link} to="whoWeWare" smooth={true} duration={500} className="custom-nav-link">QUEM SOMOS</Nav.Link>
          <div className="separator">|</div>
          <Nav.Link as={Link} to="depositions" smooth={true} duration={500} className="custom-nav-link">DEPOIMENTOS</Nav.Link>
          <div className="separator">|</div>
          <Nav.Link as={Link} to="services" smooth={true} duration={500} className="custom-nav-link">SERVIÇOS</Nav.Link>
          <div className="separator">|</div>
          <Nav.Link as={Link} to="contact" smooth={true} duration={500} className="custom-nav-link">CONTATO</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
