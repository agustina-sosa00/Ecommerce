/* eslint-disable no-unused-vars */
import React from 'react';
import { CardProducts } from '../Products/CardProducts';
import { CardSeeMore } from './CardSeeMore';

export const BoxCategoriesProd = ({
  titleCat,
  image,
  title,
  price,
  textButton,
}) => {
  return (
    <div className="box-categories">
      <h1 className="title-categories">Categories</h1>
      <div className="boxCardProd">
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardSeeMore />
      </div>
    </div>
  );
};
