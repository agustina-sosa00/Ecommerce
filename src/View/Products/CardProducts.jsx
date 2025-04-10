/* eslint-disable no-unused-vars */
import { Card } from '@mui/material';
import React from 'react';
import './Products.css';
import { CustomButton } from '../../Components/CustomButton';
import { formatPrice } from '../../Utils/formatPrice';
import { Link } from 'react-router-dom';
import { cutTitle } from '../../Utils/cutTitle';

export const CardProducts = ({ image, title, price, id, handle }) => {
  return (
    <>
      {/* xs: celular sm: tablet md: escritorio */}

      <Card sx={{ width: { xs: 150, sm: 200, md: 220 } }} className="cardProd">
        <Link to={`/products/${id}`} className="linkCardProd">
          <img src={image} alt="logo" className="imageCardProd" />
        </Link>
        <h3 className="px-3 text-sm font-bold text-center md:text-lg font-text ">
          {cutTitle(title, 15)}
        </h3>
        <p className="text-xs md:text-sm lg:text-base">{formatPrice(price)}</p>
        <div className="flex flex-col items-center justify-center w-full gap-1 p-2">
          <CustomButton
            text="Add to cart"
            classButton={true}
            color="primary"
            onClickButton={() => handle({ id, title, image, price })}
          />
        </div>
      </Card>
    </>
  );
};
