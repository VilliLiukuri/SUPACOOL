import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingProductIndex = prevItems.findIndex(item => item._id === product._id);
      if (existingProductIndex !== -1) {
        const newCartItems = [...prevItems];
        newCartItems[existingProductIndex].quantity += 1;
        return newCartItems;
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return { cartItems, addToCart };
};
