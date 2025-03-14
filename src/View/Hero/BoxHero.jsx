import React from 'react';
import { Button } from './Button';
import { Logo } from '../../Components/Navbar/Logo';

export const BoxHero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-5 lg:items-end">
      <h1>FastShop</h1>
      <p className="w-3/4 text-center lg:w-1/2">
        Descubre los mejores productos al mejor precio. Compra fácil, rápido y
        seguro. ¡Explora nuestra colección ahora!
      </p>
      <Button textButton="products" />
    </div>
  );
};
