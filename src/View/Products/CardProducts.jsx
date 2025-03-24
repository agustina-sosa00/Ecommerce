/* eslint-disable no-unused-vars */
import { Card } from '@mui/material';
import React from 'react';
import '../../index.css';
import { CustomButton } from '../../Components/CustomButton';

export const CardProducts = ({ image, title, price, textButton }) => {
  return (
    <>
      {/* xs: celular sm: tablet md: escritorio */}

      <Card sx={{ width: { xs: 150, sm: 200, md: 220 } }} className="card">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="logo"
          className=""
        />
        <h3 className="text-sm font-bold md:text-lg lg:text-xl font-text ">
          Backpack
        </h3>
        <p className="text-xs md:text-sm lg:text-base">$100</p>
        <div className="flex items-center justify-center w-full gap-2 px-2">
          {/* <button className="button">Details</button>
          <button className="button">Add to cart</button> */}
          <CustomButton text="Details" classButton={true} color="secondary" />
          <CustomButton text="Add to cart" classButton={true} color="primary" />
        </div>

        {/* <CustomButton text="Add to cart" classButton={true} /> */}
      </Card>
    </>
  );
};
