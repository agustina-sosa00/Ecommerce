import React from 'react';
import './viewCart.css';
import { Divider } from '@mui/material';
import { Count } from './Count';
import { formatPrice } from '../../Utils/formatPrice';
import { Button } from 'react-scroll';
import { ButtonWhatsapp } from './ButtonWhatsapp';

export const CartMovile = ({ cart, total }) => {
  return (
    <div className="cartMovile">
      {cart.map((item) => (
        <div className="ProdCartMovile">
          <h1 className="titleProdCartMovile">
            Product: <span>{item.title}</span>
          </h1>
          <Count product={item} />
          <p className="priceCartMovile">
            Price: <span>{formatPrice(item.price)}</span>
          </p>
          <p>Total Price: {formatPrice(item.price * item.quantity)}</p>

          <Divider />
        </div>
      ))}
      <div className="box-totalCart">
        <h2 className="totalCartMovile">Total: {formatPrice(total)}</h2>
        <ButtonWhatsapp order={cart} total={total} />
      </div>
    </div>
  );
};
