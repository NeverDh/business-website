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

import Um from '../images/Products/1.png'
import Dois from '../images/Products/2.png'
import Tres from '../images/Products/3.png'
import Quatro from '../images/Products/4.png'
import Cinco from '../images/Products/5.png'
import Seis from '../images/Products/6.png'
import Sete from '../images/Products/7.png'
import Nove from '../images/Products/9.png'
import Dez from '../images/Products/10.png'
import Onze from '../images/Products/11.png'
import Doze from '../images/Products/12.png'

function Products() {

  const items = [
    { title: 'Teleprompter para Câmera portátil', text: 'Esse modelo de teleprompter vai montado no tripé da câmera e a mesma vai montada na base do teleprompter possibilitando assim o movimento de PAN e TILT durante a gravação.', src: Um },
    { title: 'Teleprompter de Ipad', text: 'Teleprompter iPad pode ser utilizado em gruas, Steadycam. Permite a sua utilização sem ponto de energia elétrica. Temos vários tamanhos de iPad.', src: Dois },
    { title: 'Teleprompter de Show Doghouse', text: 'Eficiente para qualquer ocasião, segurança e tranquilidade para shows, apresentações, premiações podem ser utilizados como monitores de 15 a 75 polegadas. Cante suas músicas sem a necessidade de memorização.', src: Tres },
    { title: 'Teleprompter para Câmera Portátil DSLR', text: 'Para shows, apresentações, premiações, etc.', src: Quatro },
    { title: 'Teleprompter Tradicional com monitor de retorno', text: 'Teleprompter com monitor de retorno permite ao apresentar a ter a sua visão diretamente do set. Consegue visualizar os VTs e isso permite um backup de segurança.', src: Cinco },
    { title: 'Teleprompter para Câmera Portátil', text: 'Versão Estúdio.', src: Seis },
    { title: 'Teleprompter para Câmera Portátil', text: 'Lente Grande Angular.', src: Sete },
    { title: 'Teleprompter para Grua e Gimbal', text: 'Para shows, apresentações, premiações, etc.', src: Nove },
    { title: 'Teleprompter Abaixo da Lente', text: 'Para shows, apresentações, premiações, etc.', src: Dez },
    { title: 'Teleprompter para Steadycam', text: 'Teleprompter iPad muito utilizado em gruas, Steadycam ou em locação sem ponto de energia elétrica', src: Onze },
    { title: 'Teleprompter Executivo', text: 'Produto super moderno, permite visualização de até 7 metros com controle de ângulo e brilho, facilmente regulável para um ângulo mais preciso e brilho adequado. Super requisitado por políticos, igrejas, congressos, premiações e pessoas que falam em público.', src: Doze },

    
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