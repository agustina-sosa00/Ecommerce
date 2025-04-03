/* eslint-disable no-unused-vars */
import { Card } from '@mui/material';
import React from 'react';
import '../../index.css';
import { CustomButton } from '../../Components/CustomButton';
import { formatPrice } from '../../Utils/formatPrice';
import { Link } from 'react-router-dom';

export const CardProducts = ({ image, title, price, textButton, id }) => {
  return (
    <>
      {/* xs: celular sm: tablet md: escritorio */}
      <Link to={`/products/${id}`}>
        <Card sx={{ width: { xs: 150, sm: 200, md: 220 } }} className="card">
          <img src={image} alt="logo" className="imageCardProd" />
          <h3 className="px-3 text-sm font-bold text-center md:text-lg font-text ">
            {title.slice(0, 15)}
          </h3>
          <p className="text-xs md:text-sm lg:text-base">
            {formatPrice(price)}
          </p>
          <div className="flex flex-col items-center justify-center w-full gap-1 p-2">
            {/* <CustomButton
            text="Details"
            classButton={true}
            color="secondary"
            link={`/products/${id}`}
          /> */}
            <CustomButton
              text="Add to cart"
              classButton={true}
              color="primary"
            />
          </div>
        </Card>
      </Link>
    </>
  );
};
