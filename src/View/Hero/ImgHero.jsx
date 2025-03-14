import React from 'react';
import imgHero from '../../assets/imgHero.png';

export const ImgHero = () => {
  return (
    <div className="flex items-center justify-center w-full py-5 lg:justify-start lg:items-start lg:ml-10">
      <img src={imgHero} alt="" className="w-1/2" />
    </div>
  );
};
