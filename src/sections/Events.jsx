import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Events.css';
import LineComponent from '../components/LineComponent';

import Gojo from './gojo.jpg'

const Events = () => {
  return (
    <Container fluid className="event-section">
      <Col className='first-custom-column'>
       <Col md={6} className='first-column-events'>
        <div className='fernando-filho-da-puta'>
          <h1 className="event-title">Teleprompter Carioca no G20</h1>
          <p className="event-description">
            Estamos no G20! Nossos equipamentos são essenciais para os discursos de líderes mundiais. Com nosso suporte, garantimos apresentações impecáveis em um evento de proporção global.
          </p>
        </div>
          <Card className="event-card">
            <div className="custom-list">
              <ul>
                <li><strong>Ipad</strong></li>
                  <ul className='subitem-list'><li>logarina</li></ul>
                <li><strong>Teleprompter</strong></li>
                  <ul className='subitem-list'><li>câmera portátil</li></ul>
              </ul>
              <ul>
                <li><strong>Ipad</strong></li>
                  <ul className='subitem-list'><li>logarina</li></ul>
                <li><strong>Teleprompter</strong></li>
                <ul className='subitem-list'><li>câmera portátil</li></ul>
              </ul>
            </div>
          </Card>
        </Col>
        
        <Col md={6} className='custom-event'>
          <img src={Gojo} alt="G20 Event" className="event-image" />
        </Col>
        
      </Col>

    </Container>
  );
};

export default Events;
