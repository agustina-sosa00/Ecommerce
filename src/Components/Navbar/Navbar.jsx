import React from 'react';
import { ButtonBoxNavbar } from './ButtonBoxNavbar';
import { HamburgerMenu } from './HamburgerMenu';
import { SearchBar } from '../SearchBar';
import { Logo } from '../Logo';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between w-full h-20 gap-4 p-4 bg-black lg:justify-evenly">
      <ButtonBoxNavbar />
      <Logo />
      <SearchBar />
      <HamburgerMenu />
    </nav>
  );
};
