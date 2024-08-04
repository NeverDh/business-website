import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { BsTelephoneFill } from 'react-icons/bs';
import './WhoWeWare.css';

function WhoWeWare() {
  return (
    <section id="quem-somos" className="about py-5">
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-end align-items-center ">
            <div className="contact-info">
              <h2>QUER SABER MAIS?</h2>
              <p>Tenha um atendimento totalmente grátis pelo nosso WhatsApp</p>
              <div className="phone-number">
                <BsTelephoneFill size={24} />
                <p>(21) 3772-6657</p>
              </div>
              <a href="https://api.whatsapp.com/send?phone=552137726657" target="_blank" variant="success"className="contact-button" rel="noreferrer">CONTATE-NOS</a>
            </div>
          </Col>
          <Col md={6} className='d-flex flex-column'>
            <h2 className="text-right">Quem somos?</h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className='w-100'>Nossa Equipe</Accordion.Header>
                <Accordion.Body>
                  A TP Carioca presta serviços de comunicação e áudio/vídeo, alugando teleprompters e oferecendo mão de obra para TV, shows e eventos.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className='w-100'>Nossa Missão</Accordion.Header>
                <Accordion.Body>
                  Nossa missão é fornecer serviços de alta qualidade em comunicação e produção audiovisual, atendendo às necessidades de nossos clientes com excelência.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className='w-100'>Nossa História</Accordion.Header>
                <Accordion.Body>
                  Com anos de experiência no mercado, a TP Carioca se estabeleceu como uma referência em locação de equipamentos e prestação de serviços para eventos e produções audiovisuais.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className='w-100'>Nossos Valores</Accordion.Header>
                <Accordion.Body>
                  Comprometimento, qualidade, inovação e atendimento ao cliente são os valores que norteiam nossa atuação no mercado.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhoWeWare;
