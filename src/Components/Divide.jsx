import React from 'react';
import '../index.css';

export const Divide = ({ classWidth }) => {
  return (
    <div className="divideContain">
      <div className={`${classWidth ? 'divide' : 'divideFull'}`}></div>
    </div>
  );
};
