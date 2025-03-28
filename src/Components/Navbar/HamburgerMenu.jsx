import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { buttonBoxNavbar } from '../../Mock/buttonBoxNavbar';
import { Button } from '@mui/material';
import '../../index.css';

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOnClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="flex items-center justify-center w-10 h-10 p-2 rounded-lg lg:hidden"
        onClick={handleOnClick}
      >
        <GiHamburgerMenu className="text-5xl text-white" />
      </button>
      {open && (
        <div className="absolute right-0 z-10 flex flex-col items-end w-2/3 px-5 py-5 top-20 bg-black/70 lg:hidden">
          {buttonBoxNavbar.map((e) => (
            <Button className="buttonNavbar" variant="text">
              {e.name}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};
