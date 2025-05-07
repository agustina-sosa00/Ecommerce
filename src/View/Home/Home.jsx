import React, { useEffect } from 'react';
import { Hero } from '../Hero/Hero';
import { Categories } from '../Categories/Categories';
import { useGetProductsQuery } from '../../Redux/Services/productsServices';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../Redux/Store/productsSlice';
import { useProductsContext } from '../../Context/productsContext';

export const Home = () => {
  const { data } = useGetProductsQuery();
  const dispatch = useDispatch();
  const { productsContext, setProductsContext } = useProductsContext();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
      setProductsContext(data);
    }
  }, [data]);
  return (
    <>
      {products?.length > 0 ? (
        <>
          <Hero />
          <Categories products={productsContext && productsContext} />
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-screen font-text">
          Cargando...
        </div>
      )}
    </>
  );
};
