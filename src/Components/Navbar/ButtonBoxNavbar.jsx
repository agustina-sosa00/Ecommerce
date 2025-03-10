import React from 'react';

export const ButtonBoxNavbar = () => {
  return (
    <div
      className="hidden w-full md:flex justify-center items-center md:w-auto "
      id="navbar-default"
    >
      <ul className="font-medium flex flex-row   gap-2">
        <li>
          <a href="#" className="" aria-current="page">
            Home
          </a>
        </li>
      </ul>
    </div>
  );
};
