import React, { useState } from 'react';
import './Shop.css';
import Item from '../../components/Item';

function Shop() {
    const [products] = useState([
      { id: 1, name: "DVD 1", price: 10, quantity: 1 },
      { id: 2, name: "DVD 2", price: 15, quantity: 2 },
      { id: 3, name: "DVD 3", price: 20, quantity: 1 },
      // Add more products as needed
    ]);
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    return (
      <div className="shop">
        <div className="product">
          {products.length > 0 && (
            <Item
              products={products}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          )}
        </div>
      </div>
    );
}
  

export default Shop;
