import React from 'react';
import { BoxHero } from './BoxHero';
import { ImgHero } from './ImgHero';

export const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col-reverse items-center justify-end w-full min-h-screen gap-2 lg:justify-center lg:flex-row"
    >
      <BoxHero />
      <ImgHero />
    </div>
  );
};
