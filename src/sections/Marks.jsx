import React from 'react';
import { Container } from 'react-bootstrap';
import './Marks.css';

const Marks = () => {
  return (
    <Container>
      <div className="logo-grid">
        <div className="logo-item">
          <img src="/logos/globo.png" alt="Globo" className="logo-image" />
        </div>
        <div className="logo-item">
          <img src="/logos/mtv.png" alt="MTV" className="logo-image" />
        </div>
        <div className="logo-item">
          <img src="/logos/cnt.png" alt="CNT" className="logo-image" />
        </div>
        <div className="logo-item">
          <img src="/logos/petrobras.png" alt="Petrobras" className="logo-image" />
        </div>
        <div className="logo-item">
          <img src="/logos/band.png" alt="Band" className="logo-image" />
        </div>
        <div className="logo-item">
          <img src="/logos/sbt.png" alt="SBT" className="logo-image" />
        </div>
        <div className="logo-item">
          <img src="/logos/redetv.png" alt="RedeTV" className="logo-image" />
        </div>
        <div className="logo-item">
          <img src="/logos/record.png" alt="Record" className="logo-image" />
        </div>
      </div>
    </Container>
  );
};

export default Marks;
