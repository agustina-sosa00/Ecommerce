import React, { useEffect, useState } from 'react';
import { Hero } from '../Hero/Hero';
import { Categories } from '../Categories/Categories';
import { useGetProductsQuery } from '../../Redux/Services/productsServices';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductsByCategory,
  setProducts,
} from '../../Redux/Store/productsSlice';
import { useProductsContext } from '../../Context/productsContext';
import { Carousel } from '../Carousel/Carousel';

export const Home = () => {
  const { data } = useGetProductsQuery();
  const dispatch = useDispatch();
  const { productsContext, setProductsContext } = useProductsContext();
  const products = useSelector((state) => state.products.products);
  const [productsByCat, setProductsByCat] = useState();
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
      setProductsContext(data);
      dispatch(getProductsByCategory(productsByCat));
    }
  }, [data, productsByCat]);
  useEffect(() => {}, []);
  return (
    <>
      {products?.length > 0 ? (
        <>
          <Hero />
          <Carousel />
          <Categories
            products={productsContext && productsContext}
            state={setProductsByCat}
          />
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-screen font-text">
          Cargando...
        </div>
      )}
    </>
  );
};
