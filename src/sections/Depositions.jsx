import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Depositions.css';

import Um from '../images/Depositions/1.png';
import Dois from '../images/Depositions/2.png';
import Tres from '../images/Depositions/3.png';

function Depositions() {
  return (
    <section id="depoimentos" className="testimonials py-5">
      <Container>
        
        <Row className='responsive-row-custom'>
          <Col md={4}>
            <Card className="mb-4 testimonial">
              <Card.Body>
                <Image src={Um} className="mb-3" />
                <Card.Title>Henrique Gabriel</Card.Title>
                <div className="star-rating">
                  ⭐⭐⭐⭐⭐
                </div>
                <Card.Text>
                  Excelente suporte, execução perfeita, equipe atenciosa e prazos cumpridos. Altamente recomendável!
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="highlighted-testimonial">
            <Card className="mb-4 testimonial">
              <Card.Body>
                <Image src={Tres}  className="mb-3" />
                <Card.Title>Carol Fernandes</Card.Title>
                <div className="star-rating">
                  ⭐⭐⭐⭐⭐
                </div>
                <Card.Text>
                  Atendimento excelente, serviço de alta qualidade, comunicação clara e entrega dentro do prazo.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 testimonial">
              <Card.Body>
                <Image src={Dois} className="mb-3" />
                <Card.Title>Marcelo Oliveira</Card.Title>
                <div className="star-rating">
                  ⭐⭐⭐⭐⭐
                </div>
                <Card.Text>
                  Serviço excepcional, equipe eficiente, comunicação clara e entrega rápida. Muito satisfeito!
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Depositions;
