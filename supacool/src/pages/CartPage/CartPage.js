import React from 'react';
import './CartPage.css';

function CartPage({ cartItems = [] }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="cart-page">
      <h2>Ostoskorisi</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {item.price}€
            </li>
          ))}
        </ul>
      ) : (
        <p>Ostoskorisi on tyhjä.</p>
      )}
      <p>Kokonaissumma: {totalPrice.toFixed(2)}€</p>
    </div>
  );
}

export default CartPage;