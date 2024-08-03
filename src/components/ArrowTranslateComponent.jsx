import React from 'react';
import styled from 'styled-components';

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const LineUp = styled.div`
  width: 2px;  /* Ajuste a espessura conforme necessário */
  height: 180px;  /* Ajuste a altura conforme necessário */
  background-color:#3a7071; /* Ajuste a cor conforme necessário */
  transform: rotate(160deg);
  position: relative;
  top: 55px;
`;

const LineDown = styled.div`
  width: 2px;  /* Ajuste a espessura conforme necessário */
  height: 180px;  /* Ajuste a altura conforme necessário */
  background-color: #3a7071; /* Ajuste a cor conforme necessário */
  transform: rotate(-160deg);
  position: relative;
  top: 230px;
  left: -2px
`;

const ArrowTranslateComponent = () => (
  <ArrowContainer>
    <LineUp/>
    <LineDown />
  </ArrowContainer>
);

export default ArrowTranslateComponent;
