// Navigation.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import CartPage from '../pages/CartPage/CartPage';
import Button from './Button';

function Navigation() {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const cartItems = []; // Ostoskorin kohteet

  return (
    <div className="navigation">
      {location.pathname === '/shop' && (
        <>
          <Button onClick={() => setIsCartOpen(true)}>CART</Button>
          <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
            <CartPage cartItems={cartItems} />
          </Modal>
        </>
      )}
    </div>
  );
}

export default Navigation;
