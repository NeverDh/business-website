import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Header.css'; // Crie este arquivo para estilos personalizados

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar bg="white" expand="lg" fixed="top" className="custom-navbar d-flex">
        <Container fluid>
          <Navbar.Brand href="#home" className="custom-brand">
            Teleprompter <span className="carioca">carioca</span>
          </Navbar.Brand>
          {isMobile ? (
            <>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
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
            </>
          ) : (
            <Nav className="justify-content-end flex-grow-1 pe-3 custom-nav">
              <Nav.Link as={Link} to="home" smooth={true} duration={500} className="custom-nav-link">PÁGINA INICIAL</Nav.Link>
              <span className="separator">|</span>
              <Nav.Link as={Link} to="products" smooth={true} duration={500} className="custom-nav-link">PRODUTOS</Nav.Link>
              <span className="separator">|</span>
              <Nav.Link as={Link} to="whoWeWare" smooth={true} duration={500} className="custom-nav-link">QUEM SOMOS</Nav.Link>
              <span className="separator">|</span>
              <Nav.Link as={Link} to="depositions" smooth={true} duration={500} className="custom-nav-link">DEPOIMENTOS</Nav.Link>
              <span className="separator">|</span>
              <Nav.Link as={Link} to="services" smooth={true} duration={500} className="custom-nav-link">SERVIÇOS</Nav.Link>
              <span className="separator">|</span>
              <Nav.Link as={Link} to="contact" smooth={true} duration={500} className="custom-nav-link">CONTATO</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
