// src/components/ProductGrid.js
import React from 'react';
import styled from 'styled-components';

const ProductGrid = ({ products }) => {
  return (
    <Grid>
      {products.map((product) => (
        <Product key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.price}</ProductPrice>
        </Product>
      ))}
    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const Product = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProductName = styled.h3`
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  margin: 0;
  color: #888;
`;
