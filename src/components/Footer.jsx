import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <h5 className="text-uppercase">Sua Empresa</h5>
            <p>© 2024 Sua Empresa. Todos os direitos reservados.</p>
          </Col>
          <Col lg={6}>
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#home" className="text-dark">Página Inicial</a></li>
              <li><a href="#products" className="text-dark">Produtos</a></li>
              <li><a href="#services" className="text-dark">Serviços</a></li>
              <li><a href="#contact" className="text-dark">Contato</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;