import React, { useState } from 'react';
import { DrawerRight } from '../Drawer';
import { PiShoppingCartFill } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';

import './Cart.css';
import { Divide } from '../Divide.jsx';
import { useCart } from '../../Context/cartContext.jsx';
import { ListProductsCart } from './ListProductsCart.jsx';

export const Cart = () => {
  const [open, setOpen] = useState(false);
  const { total } = useCart();
  console.log('total', total);
  const handleOnClick = () => {
    setOpen(!open);
  };
  // const { cart, setCart } = useCart();

  // const handleDeleteProd = (id) => {
  //   const productDelete = cart.filter((p) => p.id !== id);
  //   setCart(productDelete);
  // };

  return (
    <DrawerRight
      isOpen={open}
      handle={handleOnClick}
      icon={<PiShoppingCartFill />}
    >
      {/* <div className="cartContain ">
        <div className="headerCart ">
          <h1 className="titleHeaderCart">Mi Carrito</h1>
          <button onClick={handleOnClick}>
            <IoMdClose />
          </button>
        </div>
        <Divide classWidth="divideFull" />
        <ListProductsCart products={cart} handleDelete={handleDeleteProd} />
        <p>total:{total}</p>
      </div> */}
      <p>Este es el modal del carrito </p>
    </DrawerRight>
  );
};
