import React from 'react';
import './Cart.css'; // Oletetaan, että luot myös Cart.css tyylitiedoston

function Cart({ cartItems }) {
  // Laske ostoskorin kokonaishinta
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Ostoskorisi</h2>
      {cartItems.length === 0 ? (
        <p>Ostoskorisi on tyhjä</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {item.price}€
            </li>
          ))}
        </ul>
      )}
      <p>Kokonaishinta: {totalPrice.toFixed(2)}€</p>
    </div>
  );
}

export default Cart;
