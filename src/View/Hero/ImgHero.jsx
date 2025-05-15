import React from 'react';
import imgHero from '../../assets/imgHero.png';

export const ImgHero = () => {
  return (
    <div className="flex items-center justify-center w-full py-5 lg:justify-end lg:items-start ">
      <img src={imgHero} alt="" className="w-1/2" />
    </div>
  );
};
