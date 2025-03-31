import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

export const CardSeeMore = ({ handle }) => {
  return (
    <Link to="/products">
      <div className="cardSeeMore" onClick={handle}>
        <p className="text-card">See More</p>
      </div>
    </Link>
  );
};
