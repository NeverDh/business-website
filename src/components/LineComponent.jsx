import React from 'react';
import styled from 'styled-components';

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const Line = styled.div`
  width: 100px; /* Ajuste o tamanho conforme necessário */
  height: 2px;  /* Ajuste a espessura conforme necessário */
  background-color: white; /* Ajuste a cor conforme necessário */
`;


const ArrowComponent = () => (
  <ArrowContainer>
    <Line />
  </ArrowContainer>
);

export default ArrowComponent;
