import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Home.css';

function Home() {
  return (
    <section id="home" className="hero text-white text-center">
      <Container className="hero-content">
        <h1>Compromisso e entrega de qualidade</h1>
        <p>Um letreiro eletrônico é um dispositivo de exibição visual que utiliza tecnologia de LED, LCD ou similar.</p>
        <Link to="products" smooth={true} duration={500}>
          <Button variant="outline-light" size="lg">veja mais opções da nossa empresa</Button>
        </Link>
      </Container>
    </section>
  );
}

export default Home;
