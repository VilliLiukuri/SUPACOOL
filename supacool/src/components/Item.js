import React from 'react';
import productImage from '../images/productionimage.png'; // Muuta polkua vastaamaan kuvatiedostosi sijaintia
import './Item.css'; // Oletetaan, että luot myös tyylitiedoston
import Button from '../components/Button';

function Item({ id, name, price, addToCart }) {
    return (
      <div className="item">
        <img src={productImage} alt={name} />
        <h3>{name}</h3>
        <p>Price: {price}€</p>
        <Button onClick={() => addToCart(id)}>ADD TO CART</Button>
      </div>
    );
}

export default Item;