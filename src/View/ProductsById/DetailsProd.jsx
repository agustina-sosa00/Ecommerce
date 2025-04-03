import React from 'react';
import './ProductsById.css';
import { formatPrice } from '../../Utils/formatPrice';
import { ButtonsCardProdById } from './ButtonsCardProdById';
import { Divide } from '../../Components/Divide';

export const DetailsProd = ({ titleProd, description, price, category }) => {
  return (
    <div className="detailsPod">
      <div className="boxDetails">
        <h1 className="titleProdId">
          <span>{titleProd}</span>
        </h1>

        <p className="priceProdId">
          <span>price:</span> {formatPrice(price)}
        </p>
        <p className="categoryProdId">
          <span>category:</span> {category}
        </p>
        <ButtonsCardProdById classBox={true} />
        <Divide classWidth={true} />
        <p className="descriptionProdId">
          <span>description:</span> {description}
        </p>
      </div>
    </div>
  );
};
