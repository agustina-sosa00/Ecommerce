import React from 'react';
import { CustomButton } from '../../Components/CustomButton';

export const ButtonsCardProdById = ({ handle, classBox }) => {
  return (
    <div className={`${classBox ? 'buttonBoxCenter' : ''}`}>
      <CustomButton
        text="Add to cart"
        classButton={true}
        color="primary"
        onClickButton={handle}
      />
    </div>
  );
};
