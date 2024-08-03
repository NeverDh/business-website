import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTv, FaCamera, FaMicrophone } from 'react-icons/fa';
import './Services.css';
import ArrowTranslateComponent from '../components/ArrowTranslateComponent';

function Services() {
  return (
    <section id="services" >
      <Container className="py-5 text-center">
        <h1>Nosso processo de trabalho</h1>
        <Row>
          <Col md={3}>
            <div className="service-box">
              <FaTv className="service-icon" />
              <h3>Estúdios</h3>
              <p>Exibidor teleprompter com cristal ótico, construído em alumínio super leve, monitor LCD pintura epóxi eletrostática, encaixe universal para todos os tripés da linha de vídeo e cinema.</p>
            </div>
          </Col>
          <Col md={1}>
            <ArrowTranslateComponent></ArrowTranslateComponent>
          </Col>
          <Col md={3}>
            <div className="service-box">
              <FaCamera className="service-icon" />
              <h3>Eventos</h3>
              <p>Para shows, apresentações, premiações podem ser utilizados como monitores de 15 a 75 polegadas.</p>
            </div>
          </Col>
          <Col md={1}>
            <ArrowTranslateComponent></ArrowTranslateComponent>
          </Col>
          <Col md={4}>
            <div className="service-box">
              <FaMicrophone className="service-icon" />
              <h3>Shows</h3>
              <p>Para shows, apresentações, premiações podem ser utilizados como monitores de 15 a 75 polegadas.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
