import React from 'react';
import { Logo } from '../Logo';
import { ButtonFooter } from './ButtonFooter';

export const Footer = () => {
  return (
    <footer className="w-full bg-black shadow-sm md:py-8 ">
      <div class="w-full max-w-screen-xl mx-auto p-4 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          <ButtonFooter />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          <a href="https://portfolio-agustina-sosa.vercel.app/">
            Agustina Sosa - Desarrolladora Frontend
          </a>
        </span>
      </div>
    </footer>
  );
};
