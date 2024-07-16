import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <Container className="py-5 text-center">
        <h1>Contato</h1>
        <Form className="mx-auto" style={{ maxWidth: '600px' }}>
          <Form.Group controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Número</Form.Label>
            <Form.Control type="tel" placeholder="Digite seu número" />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Digite a descrição" />
          </Form.Group>
          <Button variant="primary" type="submit">Enviar</Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;