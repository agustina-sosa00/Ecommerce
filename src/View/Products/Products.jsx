import React from 'react';
import { CardProducts } from './CardProducts';
import './Products.css';
import { FiltersProducts } from './FiltersProducts';
import { useCategory } from '../../Context/categoryContext';
import { useSelector } from 'react-redux';

export const Products = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();
  console.log(selectedCategory);
  const categories = useSelector((state) => state.categories.categories);
  const handleSelectCat = (cat) => {
    setSelectedCategory(cat);
  };
  const products = useSelector((state) => state.products.products);
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

      <div className="flex flex-wrap items-center justify-center w-full gap-5">
        {products
          .filter((e) => e.category.name === selectedCategory)
          .map((p, i) => (
            <CardProducts
              key={i}
              image={p.images[0]}
              title={p.title}
              price={p.price}
              id={p.id}
            />
          ))}
      </div>
    </div>
  );
};
