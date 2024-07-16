import React, { useState } from 'react';
import { Container, Carousel, Card, Col, Row } from 'react-bootstrap';
import './Products.css';

function Products() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="products">
      <Container className="py-5">
        <h1 className="text-center mb-5">Produtos</h1>
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={true} controls={true} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title>Teleprompter com monitor de retorno</Card.Title>
                      <Card.Text>Para shows, apresentações, premiações, etc.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title>Teleprompter portátil</Card.Title>
                      <Card.Text>Ideal para eventos e produções móveis.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title>Monitores de alta definição</Card.Title>
                      <Card.Text>Para exibição de texto claro e visível.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title>Teleprompter com monitor de retorno</Card.Title>
                      <Card.Text>Para shows, apresentações, premiações, etc.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title>Teleprompter portátil</Card.Title>
                      <Card.Text>Ideal para eventos e produções móveis.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title>Monitores de alta definição</Card.Title>
                      <Card.Text>Para exibição de texto claro e visível.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          {/* Adicione mais Carousel.Items conforme necessário para mais produtos */}
        </Carousel>
      </Container>
    </section>
  );
}

export default Products;
