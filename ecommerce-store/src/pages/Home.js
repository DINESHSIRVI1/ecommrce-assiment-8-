// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <h1>Welcome to MyStore</h1>
      <p>Explore our collection of amazing products!</p>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;
