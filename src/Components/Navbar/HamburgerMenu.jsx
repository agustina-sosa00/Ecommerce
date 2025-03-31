import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { buttonBoxNavbar } from '../../Mock/buttonBoxNavbar';
import { Button } from '@mui/material';
import '../../index.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOnClick = () => {
    setOpen(!open);
  };
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
    setOpen(false);
  };
  const handleOnClickB = () => {
    setOpen(false);
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
          {buttonBoxNavbar.map((e) =>
            e.type === 'scroll' ? (
              <ScrollLink
                key={e.id}
                to={e.url}
                smooth={true}
                duration={500}
                onClick={() => handleNavigation(e)}
              >
                <Button className="buttonNavbar" variant="text">
                  {e.name}
                </Button>
              </ScrollLink>
            ) : (
              <RouterLink key={e.id} to={e.url}>
                <Button
                  className="buttonNavbar"
                  variant="text"
                  onClick={handleOnClickB}
                >
                  {e.name}
                </Button>
              </RouterLink>
            )
          )}
        </div>
      )}
    </>
  );
};
