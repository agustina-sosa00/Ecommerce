import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Products } from '../View/Products/Products';
import { Home } from '../View/Home/Home';
import { ProductsById } from '../View/ProductsById/ProductsById';
import { ScrollToTop } from '../Components/ScrollToTop';
import { ViewCart } from '../View/ViewCart/ViewCart';

export const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsById />} />
        <Route path="/cart" element={<ViewCart />} />
      </Routes>
    </>
  );
};
