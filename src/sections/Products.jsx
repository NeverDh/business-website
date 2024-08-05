import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Virtual } from 'swiper/modules';

import './Products.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import gojoImg from './gojo.jpg';

function Products() {

  const items = [
    { title: 'Gojou Satoru', text: 'O feiticeiro mais forte da atualidade', src: gojoImg },
    { title: 'Teleprompter portátil', text: 'Ideal para eventos e produções móveis.', src: gojoImg },
    { title: 'Monitores de alta definição', text: 'Para exibição de texto claro e visível.', src: gojoImg },
    { title: 'Teleprompter com monitor de retorno', text: 'Para shows, apresentações, premiações, etc.', src: gojoImg },
    { title: 'Teleprompter portátil', text: 'Ideal para eventos e produções móveis.', src: gojoImg },
    { title: 'Monitores de alta definição', text: 'Para exibição de texto claro e visível.', src: gojoImg },

    
  ];
  const [selectedIndexSwiper, setSelectedIndexSwiper] = useState(0);


  return (
    <section id="products">
      <Container className="py-5 custom-products">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Virtual]}
          slidesPerView={3}
          navigation
          virtual
          pagination={{ clickable: true }}
          onSlideChange={(e) => setSelectedIndexSwiper(e.activeIndex)}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            220: { slidesPerView: 1 },
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx} virtualIndex={idx}  className={`d-flex align-items-stretch ${selectedIndexSwiper === idx ? 'selected' : '' }`}
            onClick={(e) => setSelectedIndexSwiper(idx)}
            >
              <Card className={`mb-4 ${item.title === '' ? 'd-none': ''} ` }>
                <Card.Img variant="top" src={item.src} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className={(selectedIndexSwiper === idx ? '' : 'd-none' /*&& items[idx + 1] === undefined ? '' : items[idx + 2] === undefined ? '' : 'd-none'*/) }>{item.text}</Card.Text>
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