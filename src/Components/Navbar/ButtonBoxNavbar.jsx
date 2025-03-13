import React from 'react';
import { buttonBoxNavbar } from '../../Mock/buttonBoxNavbar';
import { Button } from '@mui/material';
import './ButtonBoxNavbar.css';

export const ButtonBoxNavbar = () => {
  return (
    <div
      className="items-center justify-center hidden w-1/3 md:flex "
      id="navbar-default"
    >
      <ul className="flex flex-row gap-2 font-medium">
        {buttonBoxNavbar.map((e) => (
          <Button className="buttonNavbar" variant="text">
            {e.name}
          </Button>
        ))}
      </ul>
    </div>
  );
};
