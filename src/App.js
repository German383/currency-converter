// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ConverterPage from './pages/ConverterPage';
import RatesPage from './pages/RatesPage';
import { BaseCurrencyProvider } from './context/BaseCurrencyContext';

const App = () => {
  return (
    <BaseCurrencyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ConverterPage />} />
          <Route path="/rates" element={<RatesPage />} />
        </Routes>
      </Router>
    </BaseCurrencyProvider>
  );
};

export default App;
