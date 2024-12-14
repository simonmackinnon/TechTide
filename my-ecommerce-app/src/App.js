import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">E-Commerce</a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/products">Products</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/cart">Cart</Link>
                  </li>
              </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
