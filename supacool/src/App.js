import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Media from './pages/Media/Media';
import CartPage from './pages/CartPage/CartPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/media" element={<Media />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
