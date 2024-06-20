// src/context/BaseCurrencyContext.js
import React, { createContext, useState } from 'react';

const BaseCurrencyContext = createContext();

const BaseCurrencyProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');

  return (
    <BaseCurrencyContext.Provider value={{ baseCurrency, setBaseCurrency }}>
      {children}
    </BaseCurrencyContext.Provider>
  );
};

export { BaseCurrencyContext, BaseCurrencyProvider };
