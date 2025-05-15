import React from 'react';
import { Button } from '@mui/material';
import '../index.css';
import { Link } from 'react-router-dom';

// cuando se instale react router, recibir la url
export const CustomButton = ({
  text,
  onClickButton,

  color,
  link,
}) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <Button
            className={
              color === 'disabledButton'
                ? 'buttonCardDisabled'
                : color === 'primary'
                ? 'buttonCardPrimary'
                : color === 'secondary'
                ? 'buttonCardSecondary'
                : 'buttonNavbar'
            }
            variant="text"
            onClick={onClickButton}
            disabled={color === 'disabledButton'}
          >
            {text}
          </Button>
        </Link>
      ) : (
        <Button
          className={
            color === 'disabledButton'
              ? 'buttonCardDisabled'
              : color === 'primary'
              ? 'buttonCardPrimary'
              : color === 'secondary'
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
