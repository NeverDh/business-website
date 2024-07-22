import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Depositions.css';

function Depositions() {
  return (
    <section id="depoimentos" className="testimonials py-5">
      <Container>
        <h2 className="text-center mb-5">Depoimentos</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4 testimonial">
              <Card.Body>
                <Card.Text>Atendimento excelente, serviço de alta qualidade, comunicação clara e entrega dentro do prazo.</Card.Text>
                <Card.Footer>— Carol Fernandes</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 testimonial">
              <Card.Body>
                <Card.Text>Excelente suporte, execução perfeita, equipe atenciosa e prazos cumpridos. Altamente recomendável!</Card.Text>
                <Card.Footer>— Henrique Gabriel</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 testimonial">
              <Card.Body>
                <Card.Text>Serviço excepcional, equipe eficiente, comunicação clara e entrega rápida. Muito satisfeito!</Card.Text>
                <Card.Footer>— Marcelo Oliveira</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Depositions;
