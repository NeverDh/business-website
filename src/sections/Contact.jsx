
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGlobe, FaClipboardList } from 'react-icons/fa';
import {useState} from 'react'
import { toast } from 'react-toastify';

import './Contact.css';

import gojoImg from './gojo.jpg';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('https://formspree.io/f/mzzpdjqe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success('E-mail enviado com sucesso!');
      setFormData({ name: '', email: '', message: '' }); // Limpa o formulário após o envio
    } else {
      
      toast.error('Erro ao enviar e-mail.');
    }
  };
  
  return (
    <section id="contact">
      <Container className="">
        <Row>
          <Col md={6} className="text-center">
            <h1>Obtenha uma cotação de frete grátis</h1>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label>NOME</Form.Label>
                <Form.Control type="text" name='name'value={formData.name} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>E-MAIL</Form.Label>
                <Form.Control type="email" name='email'  value={formData.email} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>NÚMERO</Form.Label>
                <Form.Control type="tel" name='phone' value={formData.phone} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>DESCRIÇÃO</Form.Label>
                <Form.Control as="textarea" name='text' rows={2}  value={formData.text} onChange={handleChange} required/>
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
