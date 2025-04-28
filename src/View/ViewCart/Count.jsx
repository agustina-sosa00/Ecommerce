import React from 'react';
import './viewCart.css';
export const Count = () => {
  return (
    <div className="container-counter">
      <button className="buttonCounter">-</button>
      <div className="count-div">0</div>
      <button className="buttonCounter">+</button>
    </div>
  );
};
