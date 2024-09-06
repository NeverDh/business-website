import React from 'react';
import { Container } from 'react-bootstrap';
import './Marks.css';


import Um from '../images/Marks/1.png'
import Dois from '../images/Marks/2.png'
import Tres from '../images/Marks/3.png'
import Quatro from '../images/Marks/4.png'
import Cinco from '../images/Marks/5.png'
import Seis from '../images/Marks/6.png'
import Sete from '../images/Marks/7.png'
import Oito from '../images/Marks/8.png'

const Marks = () => {
  return (
    <Container className='container-marks'>
      <div className="logo-grid">
        <div className="logo-item geral-item">
          <img src={Um} alt="Globo" className="logo-image" />
        </div>
        <div className="logo-item geral-item">
          <img src={Dois} alt="MTV" className="logo-image" />
        </div>
        <div className="logo-item geral-item">
          <img src={Tres} alt="CNT" className="logo-image" />
        </div>
        <div className="logo-item geral-item">
          <img src={Quatro} alt="Petrobras" className="logo-image" />
        </div>
        <div className="reverse-item geral-item">
          <img src={Cinco} alt="Band" className="logo-image" />
        </div>
        <div className="reverse-item geral-item">
          <img src={Seis} alt="SBT" className="logo-image" />
        </div>
        <div className="reverse-item geral-item">
          <img src={Sete} alt="RedeTV" className="logo-image" />
        </div>
        <div className="reverse-item geral-item">
          <img src={Oito} alt="Record" className="logo-image" />
        </div>
      </div>
    </Container>
  );
};

export default Marks;
