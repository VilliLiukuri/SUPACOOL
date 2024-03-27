// Shop.js
import React, { useEffect, useState } from 'react';
import Product from '../../components/Product'; // Muista päivittää polku vastaamaan todellista sijaintia

function Shop({ addToCart, cartItems }) {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  
  const goToNextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };
  
  const goToPreviousProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div>
      {products.length > 0 && (
        <Product
          product={products[currentIndex]}
          goToNextProduct={goToNextProduct}
          goToPreviousProduct={goToPreviousProduct}
          onPurchase={(productId) => {
            const productToAdd = products.find((product) => product._id === productId);
            if (productToAdd) {
              addToCart(productToAdd);
            }
          }}
        />
      )}
    </div>
  );
}

export default Shop;