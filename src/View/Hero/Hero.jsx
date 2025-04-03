import React from 'react';
import { BoxHero } from './BoxHero';
import { ImgHero } from './ImgHero';
import './Hero.css';

export const Hero = () => {
  return (
    <div id="hero" className="heroContainer">
      <BoxHero />
      <ImgHero />
    </div>
  );
};
