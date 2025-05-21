import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { buttonBoxNavbar } from '../../Mock/buttonBoxNavbar';
import { CustomButton } from '../CustomButton';

export const ButtonBoxNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //lo que hace este handle es verificar si esta en /, si esta, hace scroll hasta el id que corresponda. Pero si esta en /products o /categories, y queres ir a categories, primero viaja a / y luego hace scroll a la seccion correspondiente
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
    <div
      className="items-center justify-center hidden w-1/3 h-20 2xl:h-24 lg:flex"
      id="navbar-default"
    >
      <ul className="flex flex-row items-center justify-center w-full h-20 gap-5 font-medium 2xl:h-24">
        {buttonBoxNavbar.map((e) =>
          e.type === 'scroll' ? (
            <ScrollLink
              key={e.id}
              to={e.url}
              smooth={true}
              duration={500}
              onClick={() => handleNavigation(e)}
            >
              <CustomButton
                className="buttonNavbar"
                variant="text"
                text={e.name}
              />
            </ScrollLink>
          ) : (
            <RouterLink key={e.id} to={e.url}>
              <CustomButton
                className="buttonNavbar"
                variant="text"
                text={e.name}
              />
            </RouterLink>
          )
        )}
      </ul>
    </div>
  );
};
