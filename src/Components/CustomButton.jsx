import React from 'react';
import { Button } from '@mui/material';
import '../index.css';

// cuando se instale react router, recibir la url
export const CustomButton = ({ text, onClickButton, classButton }) => {
  return (
    <Button
      className={classButton ? 'buttonCard' : 'buttonNavbar'}
      variant="text"
      onClick={onClickButton}
    >
      {text}
    </Button>
  );
};
