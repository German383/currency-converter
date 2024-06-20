// src/pages/ConverterPage.js
import React from 'react';
import Converter from '../components/Converter';
import styled from 'styled-components';

const PageTitle = styled.h1`
  text-align: center;
  margin-top: 2rem;
  font-size: 2.5rem;
`;

const ConverterPage = () => {
  return (
    <div>
      <PageTitle>Currency Converter</PageTitle>
      <Converter />
    </div>
  );
};

export default ConverterPage;
