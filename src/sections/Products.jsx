import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import './Products.css';

SwiperCore.use([Navigation, Pagination]);

function Products() {
  const items = [
    { title: 'Teleprompter com monitor de retorno', text: 'Para shows, apresentações, premiações, etc.', src: 'path/to/image1.jpg' },
    { title: 'Teleprompter portátil', text: 'Ideal para eventos e produções móveis.', src: 'path/to/image2.jpg' },
    { title: 'Monitores de alta definição', text: 'Para exibição de texto claro e visível.', src: 'path/to/image3.jpg' },
    { title: 'Teleprompter com monitor de retorno', text: 'Para shows, apresentações, premiações, etc.', src: 'path/to/image4.jpg' },
    { title: 'Teleprompter portátil', text: 'Ideal para eventos e produções móveis.', src: 'path/to/image5.jpg' },
    { title: 'Monitores de alta definição', text: 'Para exibição de texto claro e visível.', src: 'path/to/image6.jpg' }
  ];

  return (
    <section id="products">
      <Container className="py-5">
        <h1 className="text-center mb-5">Produtos</h1>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx} className="d-flex align-items-stretch">
              <Card className="mb-4">
                <Card.Img variant="top" src={item.src} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default Products;