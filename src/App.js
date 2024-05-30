// src/App.js
import React from 'react';
import './App.css'; // Import your CSS file
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import CustomerReviews from './components/CustomerReviews';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <Products />
      <CustomerReviews />
      <Contact />
    </div>
  );
}

export default App;
