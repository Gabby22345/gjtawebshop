import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Profile from './pages/Profile.jsx';
import Product from './pages/Product.jsx';
import ShoppingCart from './pages/ShoppingCart.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import PaymentDelivery from './pages/PaymentDelivery.jsx';
import TransactionConfirmation from './pages/TransactionConfirmation.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment-delivery" element={<PaymentDelivery />} />
          <Route path="/transaction-confirmation" element={<TransactionConfirmation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
