/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  const [total, setTotal] = useState(() => {
    const totalP = localStorage.getItem('total');
    return totalP ? Number(totalP) : 0;
  });

  const calculateTotal = (cart) => {
    const totalPrice = cart?.reduce((acc, prod) => acc + prod.price, 0);
    setTotal(totalPrice);
  };

  useEffect(() => {
    const cartAr = JSON.stringify(cart);
    localStorage.setItem('cart', cartAr);
    calculateTotal(cart);
  }, [cart]);

  useEffect(() => {
    const priceTotal = JSON.stringify(total);
    localStorage.setItem('total', priceTotal);
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
