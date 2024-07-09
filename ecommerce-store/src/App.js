// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
