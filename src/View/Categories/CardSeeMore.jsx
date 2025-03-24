import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

export const CardSeeMore = () => {
  return (
    <Link to="/products">
      <div className="cardSeeMore">
        <p className="text-card">See More</p>
      </div>
    </Link>
  );
};
