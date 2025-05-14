import React, { useEffect } from 'react';
import './Categories.css';
import { BoxCategoriesProd } from './BoxCategoriesProd';
import { useGetCategoriesQuery } from '../../Redux/Services/categoriesService';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../Redux/Store/categoriesSlice';
import { useCategory } from '../../Context/categoryContext';
import { useCart } from '../../Context/cartContext';
import { productsInCart } from '../../Utils/productsInCart';

export const Categories = ({ products, state }) => {
  const { cart, setCart } = useCart();
  const { setSelectedCategory } = useCategory();
  const dispatch = useDispatch();
  const { data } = useGetCategoriesQuery();
  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {
    if (data) {
      dispatch(setCategories(data));
    }
  }, [data]);

  const handleViewMore = (name) => {
    setSelectedCategory(name);
  };

  const handleAddToCart = (product) => {
    const newProd = { ...product, quantity: 1 };
    const prodInCart = productsInCart(cart, newProd?.id);
    if (prodInCart) {
      return;
    } else {
      setCart([...cart, newProd]);
    }
  };
  useEffect(() => {
    if (categories && products) {
      const filtered = categories.map((c) =>
        products?.filter((e) => e.category === c).slice(1, 2)
      );
      state(filtered);
    }
  }, [categories, products]);
  return (
    <div id="categories" className="categoriesContainer">
      <h1 className="title">Categories</h1>
      <div>
        {categories?.map((c, i) => {
          const filterProducts = products
            ?.filter((e) => e.category === c)
            .slice(0, 2);
          return (
            <BoxCategoriesProd
              key={i}
              titleCat={c}
              products={filterProducts}
              handle={() => handleViewMore(c)}
              handleAdd={handleAddToCart}
              cart={cart}
            />
          );
        })}
      </div>
    </div>
  );
};
