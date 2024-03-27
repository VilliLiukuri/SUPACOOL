import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Media from './pages/Media/Media';
import CartPage from './pages/CartPage/CartPage';
import './App.css';

function App() {
  const { cartItems, addToCart } = useCart();
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
            <Route path="/media" element={<Media />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems}/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
