import React, { useEffect } from 'react';
import './Categories.css';
import { BoxCategoriesProd } from './BoxCategoriesProd';
import { useGetCategoriesQuery } from '../../Redux/Services/categoriesService';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../Redux/Store/categoriesSlice';
export const Categories = () => {
  const dispatch = useDispatch();
  const { data } = useGetCategoriesQuery();
  useEffect(() => {
    if (data) {
      dispatch(setCategories(data));
    }
  });
  const categories = useSelector((state) => state.categories.categories);
  return (
    <div id="categories" className="categoriesContainer">
      <h1 className="title">Categories</h1>
      <BoxCategoriesProd />
      <BoxCategoriesProd />
      <BoxCategoriesProd />
    </div>
  );
};
