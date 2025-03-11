import React from 'react';
import { buttonBoxNavbar } from '../../Mock/buttonBoxNavbar';

export const ButtonBoxNavbar = () => {
  return (
    <div
      className="items-center justify-center hidden w-1/3 md:flex "
      id="navbar-default"
    >
      <ul className="flex flex-row gap-2 font-medium">
        {buttonBoxNavbar.map((e) => (
          <button className="text-lg text-white capitalize transition-all hover:border-b hover:border-white">
            {e.name}
          </button>
        ))}
      </ul>
    </div>
  );
};
