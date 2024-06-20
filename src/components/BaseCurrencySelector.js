// src/components/BaseCurrencySelector.js
import React, { useContext } from 'react';
import { BaseCurrencyContext } from '../context/BaseCurrencyContext';
import styled from 'styled-components';

const Select = styled.select`
  padding: 0.5rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const BaseCurrencySelector = () => {
  const { baseCurrency, setBaseCurrency } = useContext(BaseCurrencyContext);

  return (
    <Select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
      <option value="USD">USD</option>
      <option value="RUB">RUB</option>
      <option value="EUR">EUR</option>
    </Select>
  );
};

export default BaseCurrencySelector;
