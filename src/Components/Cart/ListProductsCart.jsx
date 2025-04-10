import React from 'react';
import './Cart.css';
import { cutTitle } from '../../Utils/cutTitle';
import { formatPrice } from '../../Utils/formatPrice';
export const ListProductsCart = ({ products, handleDelete }) => {
  return (
    <div className="listProducts">
      {products.map((p, i) => (
        <div key={i} className="itemCart">
          <img src={p.image} alt={p.title} className="imgCartProd" />
          <div className="infoProdCart">
            <h2>{cutTitle(p.title, 20)}</h2>
            <p>{formatPrice(p.price)}</p>
          </div>
          <div className="deleteProdCart" onClick={() => handleDelete(p.id)}>
            x
          </div>
        </div>
      ))}
    </div>
  );
};
