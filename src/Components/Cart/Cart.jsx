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
import { modalAlert } from '../../Utils/modalAlert.js';

export const Cart = () => {
  const [open, setOpen] = useState(false);
  const { total } = useCart();
  const handleOnClick = () => {
    setOpen(!open);
  };
  const { cart, setCart } = useCart();

  const handleDeleteProd = async (id) => {
    const result = await modalAlert({
      icon: 'info',
      textButton: 'Aceptar',
      cancelButton: true,
      cancelText: 'Cancelar',
      text: '¿Desea eliminar este producto del carrito?',
    });
    if (result.isConfirmed) {
      const productDelete = cart.filter((p) => p.id !== id);
      setCart(productDelete);
    }
  };

  return (
    <DrawerRight
      className="containericondrawer"
      isOpen={open}
      handle={handleOnClick}
      icon={<PiShoppingCartFill className="icon-cart" />}
      quantityCart={cart.length}
    >
      <div className="cartContain ">
        <div className="headerCart ">
          <h1 className="titleHeaderCart">Mi Carrito</h1>
          <button onClick={handleOnClick} className="close-button-cart">
            <IoMdClose />
          </button>
        </div>
        <Divide classWidth="divideFull" />
        {cart.length > 0 ? (
          <>
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
          </>
        ) : (
          <div className="flex items-start justify-center w-full h-screen text-gray-600 font-text">
            <p className="w-3/4 mt-20 text-center">
              Aún no hay productos en el carrito.
            </p>
          </div>
        )}
      </div>
    </DrawerRight>
  );
};
