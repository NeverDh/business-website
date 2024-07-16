import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Sua Empresa</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="home" smooth={true} duration={500}>Página Inicial</Nav.Link>
          <Nav.Link as={Link} to="products" smooth={true} duration={500}>Produtos</Nav.Link>
          <Nav.Link as={Link} to="services" smooth={true} duration={500}>Serviços</Nav.Link>
          <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;