import React from 'react';
import { buttonBoxNavbar } from '../../Mock/buttonBoxNavbar';

export const ButtonFooter = () => {
  return (
    <ul className="flex flex-wrap items-center my-6 text-sm font-medium text-white font-text sm:mb-0 ">
      {buttonBoxNavbar.map((e) => (
        <li key={e.id}>
          <a
            href={e.url}
            className="capitalize transition duration-200 ease-in hover:text-yellowPrimary me-4 md:me-6"
          >
            {e.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
