// src/pages/Products.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import ProductGrid from '../components/ProductGrid';

const Products = () => {
  const [view, setView] = useState('grid');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API
    // For now, let's use a static list
    const fetchedProducts = [
      { id: 1, name: 'Product 1', price: 10, image: 'image1.jpg' },
      { id: 2, name: 'Product 2', price: 20, image: 'image2.jpg' },
      // Add more products
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <Container>
      <ToggleView>
        <button onClick={() => setView('list')}>List View</button>
        <button onClick={() => setView('grid')}>Grid View</button>
      </ToggleView>
      {view === 'grid' ? (
        <ProductGrid products={products} />
      ) : (
        <ProductList products={products} />
      )}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding: 2rem;
`;

const ToggleView = styled.div`
  margin-bottom: 1rem;
  button {
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
