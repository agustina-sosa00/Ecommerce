import { TextField } from '@mui/material';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import '../App.css';
export const SearchBar = () => {
  return (
    <div className="flex items-center justify-center w-1/3 h-8 ">
      <input
        placeholder="Search..."
        className="w-full h-8 px-5 py-1 text-white transition-all border-t border-b border-l border-white rounded-r-none shadow-lg outline-none border-r-none lg:w-1/2 input rounded-l-xl focus:w-64"
        name="search"
        type="search"
      />
      <button className="h-8 px-2 py-1 transition-all border-t border-b border-r border-white rounded-l-none shadow-lg outline-none focus:border-b-2 focus:border-r-2 input focus:border-t-2 rounded-r-xl">
        <CiSearch className="text-xl text-white " />
      </button>
    </div>
  );
};
