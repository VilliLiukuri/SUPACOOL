import React from 'react';
import './CartPage.css'; // Muista luoda tämä tyylitiedosto

function CartPage({ cartItems = [] }) { // Oletusarvo tyhjälle taulukolle, jos cartItems on undefined
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="cart-page">
      <h2>Ostoskorisi</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {item.price}€
              {/* Voit lisätä tähän poistonappulan tai määrän muokkausvalinnat */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Ostoskorisi on tyhjä.</p>
      )}
      <p>Kokonaissumma: {totalPrice.toFixed(2)}€</p>
      {/* Lisää Checkout-nappula tässä */}
    </div>
  );
}

export default CartPage;
