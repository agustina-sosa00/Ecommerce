import React from 'react';
import './ProductsById.css';
import { formatPrice } from '../../Utils/formatPrice';
import { ButtonsCardProdById } from './ButtonsCardProdById';

export const DetailsProd = ({ titleProd, description, price, category }) => {
  return (
    <div className="detailsPod">
      <div className="boxDetails">
        <h1 className="titleProdId">
          <span>title:</span> {titleProd}
        </h1>
        <p className="descriptionProdId">
          <span>description:</span> {description}
        </p>
        <p className="priceProdId">
          <span>price:</span> {formatPrice(price)}
        </p>
        <p className="categoryProdId">
          <span>category:</span> {category}
        </p>
        <ButtonsCardProdById />
      </div>
    </div>
  );
};
