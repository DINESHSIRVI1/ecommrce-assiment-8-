// src/pages/Checkout.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your payment gateway integration here
    const orderData = {
      items: cartItems,
      // Add customer and payment details
    };
    // Post orderData to backend for processing
    const response = await axios.post('/api/checkout', orderData);
    if (response.data.success) {
      alert('Order placed successfully');
    }
  };

  return (
    <Container>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />
        <button type="submit">Place Order</button>
      </form>
    </Container>
  );
};

export default Checkout;

const Container = styled.div`
  padding: 2rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      padding: 0.5rem;
      border: 1px solid #ddd;
    }
    button {
      padding: 0.5rem 1rem;
      cursor: pointer;
      background: #333;
      color: white;
      border: none;
    }
  }
`;
