// src/components/Converter.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const Converter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const convertCurrency = async () => {
    const match = input.match(/(\d+\.?\d*)\s*([a-zA-Z]{3})\s*in\s*([a-zA-Z]{3})/);
    if (!match) {
      setResult('Invalid format');
      return;
    }

    const [ , amount, fromCurrency, toCurrency] = match;
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const rate = response.data.rates[toCurrency];
      if (rate) {
        setResult(`${amount} ${fromCurrency} = ${(amount * rate).toFixed(2)} ${toCurrency}`);
      } else {
        setResult('Invalid currency');
      }
    } catch (error) {
      setResult('Error fetching rates');
    }
  };

  return (
    <ConverterContainer>
      <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="15 USD in RUB" />
      <Button onClick={convertCurrency}>Convert</Button>
      <Result>{result}</Result>
    </ConverterContainer>
  );
};

export default Converter;
