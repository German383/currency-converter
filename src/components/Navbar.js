// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BaseCurrencySelector from './BaseCurrencySelector';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7FB3D5;
  padding: 1rem;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinks>
        <StyledLink to="/">Converter</StyledLink>
        <StyledLink to="/rates">Rates</StyledLink>
      </NavLinks>
      <BaseCurrencySelector />
    </NavbarContainer>
  );
};

export default Navbar;
