import React from 'react';
import { FaOpencart } from 'react-icons/fa';

export const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <h4 className="text-lg">FastShop</h4>
      <FaOpencart className="text-xl" />
    </div>
  );
};
