// Navigation.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import CartPage from '../pages/CartPage/CartPage';
import Button from './Button';

function Navigation({ cartItems }) {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  // Tarkista, että cartItems on määritelty ennen kuin yrität käyttää length-ominaisuutta
  const itemsLength = cartItems ? cartItems.length : 0;

  return (
    <div className="navigation">
      {location.pathname === '/shop' && (
        <>
          <Button onClick={() => setIsCartOpen(true)}>CART ({itemsLength})</Button>
          <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
            <CartPage cartItems={cartItems || []} /> {/* Varmista, että cartItems ei ole undefined */}
          </Modal>
        </>
      )}
    </div>
  );
}



export default Navigation;