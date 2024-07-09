// src/pages/Cart.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <CartList>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.price}</ItemPrice>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </ItemDetails>
            </CartItem>
          ))}
        </CartList>
      )}
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  padding: 2rem;
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h3`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  color: #888;
`;

const RemoveButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: #ff4d4d;
  color: white;
  border: none;
`;
