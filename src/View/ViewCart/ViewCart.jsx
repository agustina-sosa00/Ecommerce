import React from 'react';
import './viewCart.css';
import { useCart } from '../../Context/cartContext';
import { TableCart } from './TableCart';
import { CartMovile } from './CartMovile';

export const ViewCart = () => {
  const { cart } = useCart();
  const { total } = useCart();

  return (
    <div className="contain-viewCart">
      <h1 className="titleCart">My Cart</h1>
      <TableCart total={total} cart={cart} />
      <CartMovile total={total} cart={cart} />
    </div>
  );
};
