import React from 'react';
import { ButtonBoxNavbar } from './ButtonBoxNavbar';
import { HamburgerMenu } from './HamburgerMenu';
import { SearchBar } from '../SearchBar';
import { Logo } from '../Logo';
import { Cart } from '../Cart/Cart';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbarContain">
      <ButtonBoxNavbar />
      <Logo />
      <SearchBar />
      <div className="containCartandHamb">
        <Cart />
        <HamburgerMenu />
      </div>
    </nav>
  );
};
