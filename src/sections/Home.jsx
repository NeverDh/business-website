import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <section id="home">
      <div className="hero bg-info text-white text-center py-5">
        <Container>
          <h1>Bem-vindo à nossa empresa</h1>
          <p>Veja mais opções da nossa empresa</p>
        </Container>
      </div>
      <Container className="about py-5 text-center">
        <h2>Quem somos?</h2>
        <p>Tenha um atendimento totalmente grátis pelo nosso WhatsApp</p>
        <p>CONTATE-NOS: (21) 3772-6657</p>
      </Container>
      <Container className="testimonials py-5">
        <h2 className="text-center mb-5">Depoimentos</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>Atendimento excelente, serviço de alta qualidade, comunicação clara e entrega dentro do prazo.</Card.Text>
                <Card.Footer>— Carol Fernandes</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>Excelente suporte, execução perfeita, equipe atenciosa e prazos cumpridos. Altamente recomendável!</Card.Text>
                <Card.Footer>— Henrique Gabriel</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
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

export default Home;