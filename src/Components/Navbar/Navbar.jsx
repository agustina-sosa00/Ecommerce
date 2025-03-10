import React from 'react';
import { ButtonBoxNavbar } from './ButtonBoxNavbar';
import { HamburgerMenu } from './HamburgerMenu';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <nav className="bg-white h-20 w-full flex flex-wrap items-center justify-between relative  p-4">
      <Logo />
      <HamburgerMenu />
      <ButtonBoxNavbar />
    </nav>
  );
};
