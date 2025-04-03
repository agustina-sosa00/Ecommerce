import React from 'react';
import './ProductsById.css';

export const ImageProd = ({ image }) => {
  return (
    <div className="boxImageProd">
      <img src={image} alt="" className="imageProd" />
    </div>
  );
};
