import React from 'react';
import { FaOpencart } from 'react-icons/fa';

export const Logo = () => {
  return (
    <div className="flex items-center justify-center w-1/3 gap-1 ">
      <h4 className="text-lg text-white">FastShop</h4>
      <FaOpencart className="text-xl text-white" />
    </div>
  );
};
