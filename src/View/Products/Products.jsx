import React from 'react';
import { CardProducts } from './CardProducts';
import './Products.css';
import { FiltersProducts } from './FiltersProducts';

export const Products = () => {
  return (
    <div id="products" className="products-container">
      <div className="boxHead">
        <h1 className="title font-text ">Products</h1>
        <FiltersProducts />
      </div>

      <div className="flex flex-wrap items-center justify-center w-full gap-5">
        <CardProducts />
      </div>
    </div>
  );
};
