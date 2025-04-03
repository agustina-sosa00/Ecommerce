import React, { useEffect } from 'react';
import './Categories.css';
import { BoxCategoriesProd } from './BoxCategoriesProd';
import { useGetCategoriesQuery } from '../../Redux/Services/categoriesService';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../Redux/Store/categoriesSlice';
import { useGetProductsQuery } from '../../Redux/Services/productsServices';
import { setProducts } from '../../Redux/Store/productsSlice';
import { useCategory } from '../../Context/categoryContext';
import { useProductsContext } from '../../Context/productsContext';
export const Categories = () => {
  const { setSelectedCategory } = useCategory();
  const { setProductsContext } = useProductsContext();
  const dispatch = useDispatch();
  const { data } = useGetCategoriesQuery();
  const { data: productsData } = useGetProductsQuery();
  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    if (data && productsData) {
      dispatch(setCategories(data));
      dispatch(setProducts(productsData));
    }
  }, [data?.length, productsData?.length]);

  const handleViewMore = (name) => {
    setSelectedCategory(name);
    setProductsContext(products);
  };
  return (
    <div id="categories" className="categoriesContainer">
      <h1 className="title">Categories</h1>

      {categories?.map((c, i) => {
        const filterProducts = products
          .filter((e) => e.category === c)
          .slice(0, 3);

        return (
          <BoxCategoriesProd
            key={i}
            titleCat={c}
            products={filterProducts}
            handle={() => handleViewMore(c)}
          />
        );
      })}
    </div>
  );
};
