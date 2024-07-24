import React from 'react';
import styled from 'styled-components';

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 480px; /* Ajuste o tamanho conforme necessário */
  margin-left: -120px;
  margin-top: 40px;
  height: 4px;  /* Ajuste a espessura conforme necessário */
  background-color: white; /* Ajuste a cor conforme necessário */
`;

const ArrowHead = styled.div`
  width: 0;
  height: 0;
  margin-top: 40px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid white; /* Ajuste a cor conforme necessário */
`;

const ArrowComponent = () => (
  <ArrowContainer>
    <Line />
    <ArrowHead />
  </ArrowContainer>
);

export default ArrowComponent;
