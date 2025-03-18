import React from 'react';
import { buttonBoxNavbar } from '../../Mock/buttonBoxNavbar';
import { CustomButton } from '../CustomButton';

export const ButtonBoxNavbar = () => {
  return (
    <div
      className="items-center justify-center hidden w-1/3 lg:flex "
      id="navbar-default"
    >
      <ul className="flex flex-row gap-4 font-medium">
        {buttonBoxNavbar.map((e) => (
          <CustomButton
            className="buttonNavbar"
            variant="text"
            text={e.name}
            key={e.id}
          />
        ))}
      </ul>
    </div>
  );
};
