import React from 'react';
import productImage from '../images/productionimage.png';
import './Item.css';
import Button from '../components/Button';

function Item({ products, currentIndex, setCurrentIndex }) {
    const goToNextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };
  
    const goToPreviousProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const product = products[currentIndex];

    return (
      <div className="item">
        <div className="item-image">
          <img src={productImage} alt={product.name} />
        </div>
        <div className="item-name">
        <Button onClick={goToPreviousProduct}>&lt;</Button>
        <h3>{product.name}</h3>
        <Button onClick={goToNextProduct}>&gt;</Button>
        </div>
        <div className="item-details">
          <p>Price: {product.price}€</p>
        </div>
      </div>
    );
}

export default Item;
