import React from 'react';
import './viewCart.css';
import { useCart } from '../../Context/cartContext';
import { TableCart } from './TableCart';

export const ViewCart = () => {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div className="contain-viewCart">
      <h1 className="titleCart">My Cart</h1>
      <TableCart />{' '}
    </div>
  );
};
