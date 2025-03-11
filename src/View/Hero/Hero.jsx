import React from 'react';
import { BoxHero } from './BoxHero';
import { ImgHero } from './ImgHero';

export const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center w-full min-h-screen gap-2 lg:flex-row"
    >
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <BoxHero />
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <ImgHero />
      </div>
    </div>
  );
};
