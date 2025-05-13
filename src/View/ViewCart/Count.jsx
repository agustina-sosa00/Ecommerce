import React from 'react';
import './viewCart.css';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa6';
import { useState } from 'react';
import { useCart } from '../../Context/cartContext';
export const Count = (product) => {
  const { cart, setCart } = useCart();
  const [count, setCount] = useState(product?.product.quantity);
  const handleCalculateQuantity = (icon) => {
    const productId = cart.find((item) => item.id === product.product.id);
    if (productId) {
      if (icon === 'increment') {
        const newQuantity = productId.quantity + 1;
        setCount(newQuantity);
        const newProd = { ...productId, quantity: newQuantity };
        const newCart = cart.map((item) => {
          if (item.id === productId.id) {
            return newProd;
          } else {
            return item;
          }
        });
        setCart(newCart);
      } else if (icon === 'decrement') {
        if (count > 1) {
          const newQuantity = productId.quantity - 1;
          setCount(newQuantity);
          const newProd = { ...productId, quantity: newQuantity };
          const newCart = cart.map((item) => {
            if (item.id === productId.id) {
              return newProd;
            } else {
              return item;
            }
          });
          setCart(newCart);
        }
      }
    }
  };

  return (
    <div className="container-counter">
      <button
        className="buttonCounter"
        onClick={() => handleCalculateQuantity('decrement')}
      >
        <FaMinus className="icon-counter" />
      </button>
      <div className="count-div">{count}</div>
      <button
        className="buttonCounter"
        onClick={() => handleCalculateQuantity('increment')}
      >
        <FaPlus className="icon-counter" />
      </button>
    </div>
  );
};
