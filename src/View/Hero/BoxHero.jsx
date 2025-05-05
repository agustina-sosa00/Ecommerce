import React from 'react';
import { Button } from './Button';

export const BoxHero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 px-5 lg:px-0 lg:gap-3 lg:items-end">
      <img src="/logoBlack.png" alt="logo" className="w-2/4" />
      <p className="w-5/6 text-sm text-center md:w-2/3 md:text-lg lg:w-2/3 lg:text-right font-text">
        Discover the best products at the best price. Buy easy, fast and sure.
        Explore our collection now!
      </p>
      <Button textButton="products" link={'/products'} />
    </div>
  );
};
