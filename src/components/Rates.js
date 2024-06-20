// src/components/Rates.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BaseCurrencyContext } from '../context/BaseCurrencyContext';

const RatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const RatesTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableHeader = styled.th`
  padding: 0.5rem;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

const Rates = () => {
  const { baseCurrency } = useContext(BaseCurrencyContext);
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        setRates(response.data.rates);
      } catch (error) {
        console.error('Error fetching rates:', error);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return (
    <RatesContainer>
      <h1>Exchange Rates for {baseCurrency}</h1>
      <RatesTable>
        <thead>
          <TableRow>
            <TableHeader>Currency</TableHeader>
            <TableHeader>Rate</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Object.entries(rates).map(([currency, rate]) => (
            <TableRow key={currency}>
              <TableCell>{currency}</TableCell>
              <TableCell>{rate}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </RatesTable>
    </RatesContainer>
  );
};

export default Rates;
