import { Divider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import '../index.css';
import { useProductsContext } from '../Context/productsContext';
import { formatPrice } from '../Utils/formatPrice';
import { Link } from 'react-router-dom';
export const SearchBar = () => {
  const [valueInput, setValueInput] = useState('');
  const [productsFilters, setProductsFilters] = useState();
  const [writing, setWriting] = useState(false);
  const { productsContext } = useProductsContext();
  console.log('productsFilters', productsFilters);
  const handleOnChange = (event) => {
    setWriting(true);
    const { value } = event.target;
    setValueInput(value);
    const productsFilter = productsContext.filter((item) => {
      return item.title.includes(value) && item;
    });
    setProductsFilters(productsFilter);
  };

  useEffect(() => {
    valueInput.length === 0 ? setWriting(false) : setWriting(true);
  }, [valueInput.length]);

  return (
    <div className="relative flex justify-center w-1/3 ">
      <div className="items-center justify-center hidden w-full h-8 lg:flex ">
        <input
          placeholder="Search..."
          className="w-full h-8 px-5 py-1 text-white transition-all border-t border-b border-l border-white rounded-r-none shadow-lg outline-none border-r-none lg:w-1/2 input rounded-l-xl focus:w-64"
          name="search"
          type="search"
          onChange={handleOnChange}
          autocomplete="off"
        />
        <button className="h-8 px-2 py-1 transition-all border-t border-b border-r border-white rounded-l-none shadow-lg outline-none focus:border-b-2 focus:border-r-2 input focus:border-t-2 rounded-r-xl">
          <CiSearch className="text-xl text-white " />
        </button>
      </div>
      {writing && (
        <div className="container-suggestion-SearBar">
          {productsFilters.map((item, index) => (
            <>
              <Link
                to={`products/${item.id}`}
                onClick={() => setWriting(false)}
              >
                <div key={index} className="boxProd-searchBar">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="imageProd-searchBar"
                  />
                  <div className="infoProd-searchBar">
                    <h3 className="titleProd-searchBar">{item.title}</h3>
                    <p className="priceProd-searchBar">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                </div>
              </Link>

              <Divider />
            </>
          ))}
        </div>
      )}
    </div>
  );
};
