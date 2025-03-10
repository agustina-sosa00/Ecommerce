import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';

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
        className=" flex items-center p-2 w-10 h-10   justify-center  rounded-lg md:hidden  "
        onClick={handleOnClick}
      >
        <CiMenuBurger className="text-5xl" />
      </button>
      {open && (
        <div className=" w-2/3 h-screen absolute top-20 bg-black/50 right-0 z-10 ">
          hh
        </div>
      )}
    </>
  );
};
