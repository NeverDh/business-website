import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Depositions.css';
import gojoImg from './gojo.jpg';


function Depositions() {
  return (
    <section id="depoimentos" className="testimonials py-5">
      <Container>
        <h2 className="text-center mb-5">Depoimentos</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4 testimonial">
              <Card.Body>
                <Image src={gojoImg} className="mb-3" />
                <Card.Title>Henrique Gabriel</Card.Title>
                <Card.Text>
                  Excelente suporte, execução perfeita, equipe atenciosa e prazos cumpridos. Altamente recomendável!
                </Card.Text>
                <div className="star-rating">
                  ⭐⭐⭐⭐⭐
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="highlighted-testimonial">
            <Card className="mb-4 testimonial">
              <Card.Body>
                <Image src={gojoImg}  className="mb-3" />
                <Card.Title>Carol Fernandes</Card.Title>
                <Card.Text>
                  Atendimento excelente, serviço de alta qualidade, comunicação clara e entrega dentro do prazo.
                </Card.Text>
                <div className="star-rating">
                  ⭐⭐⭐⭐⭐
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 testimonial">
              <Card.Body>
                <Image src={gojoImg} className="mb-3" />
                <Card.Title>Marcelo Oliveira</Card.Title>
                <Card.Text>
                  Serviço excepcional, equipe eficiente, comunicação clara e entrega rápida. Muito satisfeito!
                </Card.Text>
                <div className="star-rating">
                  ⭐⭐⭐⭐⭐
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Depositions;
