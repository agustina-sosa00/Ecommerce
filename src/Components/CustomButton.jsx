import React from 'react';
import { Button } from '@mui/material';
import '../index.css';
import { Link } from 'react-router-dom';

// cuando se instale react router, recibir la url
export const CustomButton = ({
  text,
  onClickButton,
  classButton,
  color,
  link,
}) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <Button
            className={
              classButton & (color === 'primary')
                ? 'buttonCardPrimary'
                : classButton & (color === 'secondary')
                ? 'buttonCardSecondary'
                : 'buttonNavbar'
            }
            variant="text"
            onClick={onClickButton}
          >
            {text}
          </Button>
        </Link>
      ) : (
        <Button
          className={
            classButton & (color === 'primary')
              ? 'buttonCardPrimary'
              : classButton & (color === 'secondary')
              ? 'buttonCardSecondary'
              : 'buttonNavbar'
          }
          variant="text"
          onClick={onClickButton}
        >
          {text}
        </Button>
      )}
    </>
  );
};
