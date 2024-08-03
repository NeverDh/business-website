import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Events.css';

const Events = () => {
  return (
    <Container fluid className="event-section">
      <Row>
        <Col md={6}>
          <h1 className="event-title">Teleprompter Carioca no G20</h1>
          <p className="event-description">
            Estamos no G20! Nossos equipamentos são essenciais para os discursos de líderes mundiais. Com nosso suporte, garantimos apresentações impecáveis em um evento de proporção global.
          </p>
        </Col>
        <Col md={6}>
          <img src="/event-image.png" alt="G20 Event" className="event-image" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="event-card">
            <ul>
              <li><strong>Teleprompter</strong> - Com monitor de retorno</li>
              <li><strong>Teleprompter</strong> - DSLR 10 polegadas</li>
            </ul>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="event-card">
            <ul>
              <li><strong>Ipad</strong> - logarina</li>
              <li><strong>Teleprompter</strong> - câmera portátil</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
