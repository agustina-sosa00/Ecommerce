import React from 'react';
import { Button } from '@mui/material';
import '../index.css';

// cuando se instale react router, recibir la url
export const CustomButton = ({ text, onClickButton, classButton, color }) => {
  return (
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
  );
};
