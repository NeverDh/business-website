import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="text-white text-center text-lg-start">
      <Container className="p-3">
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Sobre</h5>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Nossas Redes</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com" className="social-icon">
                <FaTwitter />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <h5 className="text-uppercase">Links</h5>
            <a href="#terms" className="text-white me-2">Termos e Condições</a>
            <a href="#privacy" className="text-white">Política de Privacidade</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
