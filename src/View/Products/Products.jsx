import React from 'react';
import { CardProducts } from './CardProducts';
import './Products.css';
import { FiltersProducts } from './FiltersProducts';
import { useCategory } from '../../Context/categoryContext';
import { useSelector } from 'react-redux';
import { useCart } from '../../Context/cartContext';
import { productsInCart } from '../../Utils/productsInCart';
import { useProductsContext } from '../../Context/productsContext';

export const Products = () => {
  const { cart, setCart } = useCart();
  const { selectedCategory, setSelectedCategory } = useCategory();

  const categories = useSelector((state) => state.categories.categories);

  const handleSelectCat = (cat) => {
    setSelectedCategory(cat);
  };
  const { productsContext } = useProductsContext();

  const handleAddToCart = async (prod) => {
    const newProd = { ...prod, quantity: 1 };
    const prodInCart = productsInCart(cart, newProd?.id);

    if (prodInCart) {
      return;
    } else {
      setCart([...cart, newProd]);
    }
  };
  return (
    <div id="products" className="products-container">
      <div className="boxHead">
        <h1 className="title font-text ">Products</h1>
        <FiltersProducts
          selectCat={selectedCategory}
          handleChange={handleSelectCat}
          categories={categories}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center w-full gap-5 py-10">
        {selectedCategory
          ? productsContext
              .filter((e) => e.category === selectedCategory)
              .map((p, i) => (
                <CardProducts
                  key={i}
                  image={p.image}
                  title={p.title}
                  price={p.price}
                  id={p.id}
                  handle={handleAddToCart}
                  prodInCart={productsInCart(cart, p.id)}
                />
              ))
          : productsContext.map((p, i) => (
              <CardProducts
                key={i}
                image={p.image}
                title={p.title}
                price={p.price}
                id={p.id}
                handle={handleAddToCart}
                prodInCart={productsInCart(cart, p.id)}
              />
            ))}
      </div>
    </div>
  );
};
