/* eslint-disable no-unused-vars */
import { Card } from '@mui/material';
import React from 'react';
import './Products.css';
import { CustomButton } from '../../Components/CustomButton';
import { formatPrice } from '../../Utils/formatPrice';
import { Link } from 'react-router-dom';
import { cutTitle } from '../../Utils/cutTitle';

export const CardProducts = ({
  image,
  title,
  price,
  id,
  handle,
  prodInCart,
}) => {
  return (
    <>
      {/* xs: celular sm: tablet md: escritorio */}

      <div className="card">
        <Link to={`/products/${id}`} classNameName="linkCardProd">
          <div className="card-image">
            <img src={image} alt="logo" classNameName="imageCardProd" />
          </div>
        </Link>
        <div className="card-content">
          {/* <div className="category">Illustration</div> */}
          <Link to={`/products/${id}`} classNameName="linkCardProd">
            <div className="heading">
              {title}
              <div className="author">{formatPrice(price)}</div>
            </div>
          </Link>

          <div classNameName="flex flex-col items-center justify-center w-full gap-1 p-2">
            <CustomButton
              text={prodInCart ? 'Agregado' : 'Add to cart'}
              classNameButton={true}
              color={prodInCart ? 'disabledButton' : 'primary'}
              onClickButton={(e) => {
                handle({ id, title, image, price });
              }}
            />
          </div>
        </div>
      </div>

      {/* <Card sx={{ width: { xs: 150, sm: 200, md: 220 } }} className="cardProd">
        <Link to={`/products/${id}`} className="linkCardProd">
          <img src={image} alt="logo" className="imageCardProd" />
        </Link>
        <h3 className="px-3 text-sm font-bold text-center md:text-lg font-text ">
          {title}
        </h3>
        <p className="text-xs md:text-sm lg:text-base">{formatPrice(price)}</p>
        <div className="flex flex-col items-center justify-center w-full gap-1 p-2">
          <CustomButton
            text={prodInCart ? 'Agregado' : 'Add to cart'}
            classButton={true}
            color={prodInCart ? 'disabledButton' : 'primary'}
            onClickButton={() => handle({ id, title, image, price })}
          />
        </div>
      </Card> */}
    </>
  );
};
