import React from 'react';
import { buttonBoxNavbar } from '../../Mock/buttonBoxNavbar';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
export const ButtonFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (e) => {
    if (e.type === 'scroll') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document
            .getElementById(e.url)
            ?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  };
  return (
    <ul className="flex flex-wrap items-center my-6 text-sm font-medium text-white font-text sm:mb-0 ">
      {buttonBoxNavbar.map((e) => (
        <li key={e.id}>
          {e.type === 'scroll' ? (
            <ScrollLink
              key={e.id}
              to={e.url}
              smooth={true}
              duration={500}
              onClick={() => handleNavigation(e)}
            >
              <p className="capitalize transition duration-200 ease-in cursor-pointer hover:text-yellowPrimary me-4 md:me-6">
                {e.name}
              </p>
            </ScrollLink>
          ) : (
            <RouterLink key={e.id} to={e.url}>
              <p className="capitalize transition duration-200 ease-in cursor-pointer hover:text-yellowPrimary me-4 md:me-6">
                {e.name}
              </p>
            </RouterLink>
          )}
        </li>
      ))}
    </ul>
  );
};
