import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Products } from '../View/Products/Products';
import { Home } from '../View/Home/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<h1>products by id</h1>} />
      <Route path="/cart" element={<h1>Cart</h1>} />
    </Routes>
  );
};
