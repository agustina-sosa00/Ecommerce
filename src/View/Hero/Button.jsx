import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

export const Button = ({ textButton, link }) => {
  return (
    <Link to={link}>
      <button className="btn-12">
        <span>{textButton}</span>
      </button>
    </Link>
  );
};
