import React from 'react';
import '../../index.css';

export const Button = ({ textButton }) => {
  return (
    <button className="btn-12">
      <span>{textButton}</span>
    </button>
  );
};
