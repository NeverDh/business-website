import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGlobe, FaClipboardList } from 'react-icons/fa';
import './Contact.css';

import gojoImg from './gojo.jpg';

function Contact() {
  return (
    <section id="contact">
      <Container className="">
        <Row>
          <Col md={6} className="text-center">
            <h1>Obtenha uma cotação de frete grátis</h1>
            <Form className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label>NOME</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>E-MAIL</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>NÚMERO</Form.Label>
                <Form.Control type="tel" placeholder="Digite seu número" />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>DESCRIÇÃO</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Digite a descrição"/>
              </Form.Group>
              <Button variant="primary" type="submit" className="submit-button">ENVIAR</Button>
            </Form>
          </Col>
          <Col md={6} className="text-center custom-text-center">
            <img src={gojoImg} alt="Stage Setup" className="img-fluid" />
            <div className="info-box">
              <FaGlobe className="info-icon" />
              <h4>Velocidade e Qualidade</h4>
            </div>
            <div className="info-box">
              <FaClipboardList className="info-icon" />
              <h4>Organização e Gestão</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
