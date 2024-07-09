// src/components/ProductList.js
import React from 'react';
import styled from 'styled-components';

const ProductList = ({ products }) => {
  return (
    <List>
      {products.map((product) => (
        <Product key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductInfo>
        </Product>
      ))}
    </List>
  );
};

export default ProductList;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h3`
  margin: 0;
`;

const ProductPrice = styled.p`
  margin: 0;
  color: #888;
`;
