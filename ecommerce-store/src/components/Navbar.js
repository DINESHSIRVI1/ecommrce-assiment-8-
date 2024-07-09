// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">MyStore</Logo>
        <NavMenu>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/products">Products</NavItem>
          <NavItem to="/cart">Cart</NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: #333;
  padding: 1rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #ddd;
  }
`;
