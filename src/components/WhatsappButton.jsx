import React from 'react';
import { Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  return (
    <div className="whatsapp-button">
      <Button
        href="https://wa.me/552137726657"
        target="_blank"
        variant="success"
        className="rounded-circle"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaWhatsapp size={30} />
      </Button>
    </div>
  );
};

export default WhatsappButton;
