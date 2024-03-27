// Product.js
import React from 'react';
import './Product.css';
import Button from './Button';

function Product({ product, goToNextProduct, goToPreviousProduct, onPurchase }) {
  const imageUrl = `${process.env.REACT_APP_BACKEND_URL}/product/images/${product.imageUrl}`;
  const handlePurchase = () => {
    onPurchase(product._id);
  };
  
  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={product.name} />
      </div>
      <div className="product-name">
        <Button onClick={goToPreviousProduct}>&lt;</Button>
        <h3>{product.name}</h3>
        <Button onClick={goToNextProduct}>&gt;</Button>
      </div>
      <div className="product-details">
      <Button onClick={handlePurchase}>buy</Button>
        <p>Price: {product.price}€</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}


export default Product;
