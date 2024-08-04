import React from 'react';
import { Container } from 'react-bootstrap';
import './Marks.css';

import Gojo from './gojo.jpg'

const Marks = () => {
  return (
    <Container>
      <div className="logo-grid">
        <div className="logo-item">
          <img src={Gojo} alt="Globo" className="logo-image" />
        </div>
        <div className="logo-item">
          <img src={Gojo} alt="MTV" className="logo-image" />
        </div>
        <div className="logo-item">
          <img src={Gojo} alt="CNT" className="logo-image" />
        </div>
        <div className="logo-item">
          <img src={Gojo} alt="Petrobras" className="logo-image" />
        </div>
        <div className="reverse-item">
          <img src={Gojo} alt="Band" className="logo-image" />
        </div>
        <div className="reverse-item">
          <img src={Gojo} alt="SBT" className="logo-image" />
        </div>
        <div className="reverse-item">
          <img src={Gojo} alt="RedeTV" className="logo-image" />
        </div>
        <div className="reverse-item">
          <img src={Gojo} alt="Record" className="logo-image" />
        </div>
      </div>
    </Container>
  );
};

export default Marks;
