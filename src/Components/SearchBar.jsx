import { Divider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import '../index.css';
import { formatPrice } from '../Utils/formatPrice';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../Context/productsContext';
export const SearchBar = () => {
  const [valueInput, setValueInput] = useState('');
  const [productsFilters, setProductsFilters] = useState();
  const [writing, setWriting] = useState(false);
  const { productsContext } = useProductsContext();
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
    <div className="relative flex justify-center w-3/4 lg:w-full ">
      <div className="flex items-center justify-center w-full h-8 ">
        <input
          placeholder="Search..."
          className="w-full h-8 px-5 py-1 font-bold text-black transition-all border-t-2 border-b-2 border-l-2 border-black rounded-r-none shadow-lg outline-none md:font-normal md:border-b md:border-l md:border-t md:border-white md:text-white border-r-none lg:w-1/2 input rounded-l-xl "
          name="search"
          type="search"
          onChange={handleOnChange}
          autocomplete="off"
        />
        <button className="h-8 px-2 py-1 transition-all border-t-2 border-b-2 border-r-2 border-black rounded-l-none shadow-lg outline-none md:border-t md:border-b md:border-r md:border-white focus:border-b-2 focus:border-r-2 input focus:border-t-2 rounded-r-xl">
          <CiSearch className="text-xl !font-bold text-black md:font-normal md:text-white " />
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
