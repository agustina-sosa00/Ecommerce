import React from 'react';
import './Categories.css';
import { BoxCategoriesProd } from './BoxCategoriesProd';
export const Categories = () => {
  return (
    <div id="categories" className="categoriesContainer">
      <h1 className="title">Categories</h1>
      <BoxCategoriesProd />
      <BoxCategoriesProd />
      <BoxCategoriesProd />
    </div>
  );
};
