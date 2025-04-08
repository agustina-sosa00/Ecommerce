import React, { useState } from 'react';
import { DrawerRight } from '../Drawer';
import { PiShoppingCartFill } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';

import './Cart.css';
import { Divide } from '../Divide.jsx';

export const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleOnClick = () => {
    setOpen(!open);
  };
  return (
    <DrawerRight
      isOpen={open}
      handle={handleOnClick}
      icon={<PiShoppingCartFill />}
    >
      <div className="cartContain">
        <div className="headerCart">
          <h1>Mi Carrito</h1>
          <button onClick={handleOnClick}>
            <IoMdClose />
          </button>
        </div>

        <Divide classWidth="divideFull" />
      </div>
    </DrawerRight>
  );
};
