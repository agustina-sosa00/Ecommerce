import React from 'react';
import './Cart.css';
import { cutTitle } from '../../Utils/cutTitle';
import { formatPrice } from '../../Utils/formatPrice';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Divider } from '@mui/material';

export const ListProductsCart = ({ products, handleDelete }) => {
  return (
    <div className="listProducts">
      {products.length > 0 ? (
        products.map((p, i) => (
          <>
            <div key={i} className="itemCart">
              <img src={p.image} alt={p.title} className="imgCartProd" />
              <div className="infoProdCart">
                <h2 className="titleProdCart">{cutTitle(p.title, 20)}</h2>
                <p className="priceProdCart">{formatPrice(p.price)}</p>
              </div>
              <div className="deleteProdCart">
                <RiDeleteBin6Line
                  className="iconDeleteCart"
                  onClick={() => handleDelete(p.id)}
                />
              </div>
            </div>
            <Divider className="dividerMaterial" />
          </>
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-screen text-gray-600 font-text">
          Aún no hay productos en el carrito. Ver más...
        </div>
      )}
    </div>
  );
};
