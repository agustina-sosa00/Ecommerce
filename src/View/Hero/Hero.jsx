import React from 'react';
import { BoxHero } from './BoxHero';
import { ImgHero } from './ImgHero';

export const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col-reverse items-center justify-end w-full gap-2 pb-10 bg-white md:pb-0 lg:min-h-screen lg:justify-center lg:flex-row"
    >
      <BoxHero />
      <ImgHero />
    </div>
  );
};
