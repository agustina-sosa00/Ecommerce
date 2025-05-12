import React, { useState } from 'react';
import { DrawerRight } from '../Drawer';
import { PiShoppingCartFill } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';

import './Cart.css';
import { Divide } from '../Divide.jsx';
import { useCart } from '../../Context/cartContext.jsx';
import { ListProductsCart } from './ListProductsCart.jsx';
import { CustomButton } from '../CustomButton.jsx';
import { formatPrice } from '../../Utils/formatPrice.js';

export const Cart = () => {
  const [open, setOpen] = useState(false);
  const { total } = useCart();
  const handleOnClick = () => {
    setOpen(!open);
  };
  const { cart, setCart } = useCart();

  const handleDeleteProd = (id) => {
    const productDelete = cart.filter((p) => p.id !== id);
    setCart(productDelete);
  };

  return (
    <DrawerRight
      isOpen={open}
      handle={handleOnClick}
      icon={<PiShoppingCartFill />}
      quantityCart={cart.length}
    >
      <div className="cartContain ">
        <div className="headerCart ">
          <h1 className="titleHeaderCart">Mi Carrito</h1>
          <button onClick={handleOnClick}>
            <IoMdClose />
          </button>
        </div>
        <Divide classWidth="divideFull" />
        <ListProductsCart products={cart} handleDelete={handleDeleteProd} />
        <div className="constain-infoCart">
          <p className="totalPrice-text">
            <span>total: </span>
            {formatPrice(total)}
          </p>

          <CustomButton
            classButton={true}
            color="primary"
            text={'Ver compra'}
            link={'/cart'}
            onClickButton={handleOnClick}
          />
        </div>
      </div>
    </DrawerRight>
  );
};
