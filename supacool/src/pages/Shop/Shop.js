import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import Item from '../../components/Item';
import Button from '../../components/Button';

function Shop() {
    const [products, setProducts] = useState([
      { id: 1, name: "DVD 1", price: 10, quantity: 1 },
      { id: 2, name: "DVD 2", price: 15, quantity: 2 },
      { id: 3, name: "DVD 3", price: 20, quantity: 1 },
      // Lisää tuotteita tarpeen mukaan
    ]);
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNextProduct = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };
  
    const goToPreviousProduct = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };
  
    return (
        <div className="shop">
          <Link to="/cart">CART</Link>
          <div className="product-navigation">
            <Button onClick={goToPreviousProduct}>&lt;</Button>
            {products.length > 0 && (
              <Item
                key={products[currentIndex].id}
                id={products[currentIndex].id}
                name={products[currentIndex].name}
                price={products[currentIndex].price}
              />
            )}
            <Button onClick={goToNextProduct}>&gt;</Button>
          </div>
        </div>
      );
  }
  

export default Shop;
