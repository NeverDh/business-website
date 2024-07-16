import React from 'react';
import { Container } from 'react-bootstrap';
import './Services.css';

function Services() {
  return (
    <section id="services">
      <Container className="py-5 text-center">
        <h1>Serviços</h1>
        <p>Atendimento excelente, serviço de alta qualidade, comunicação clara e entrega dentro do prazo.</p>
      </Container>
    </section>
  );
}

export default Services;