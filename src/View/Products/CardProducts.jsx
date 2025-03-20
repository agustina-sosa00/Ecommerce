import { Card } from '@mui/material';
import React from 'react';
import '../../index.css';
import { CustomButton } from '../../Components/CustomButton';

export const CardProducts = () => {
  return (
    <>
      {/* xs: celular sm: tablet md: escritorio */}

      <Card sx={{ width: { xs: 150, sm: 200, md: 250 } }} className="card">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="logo"
          className=""
        />
        <h3 className="text-sm font-bold md:text-lg lg:text-xl font-text ">
          Backpack
        </h3>
        <p className="text-xs md:text-sm lg:text-base">$100</p>
        <CustomButton text="Add to cart" classButton={true} />
      </Card>
    </>
  );
};
