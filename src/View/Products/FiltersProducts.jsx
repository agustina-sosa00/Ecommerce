import React from 'react';
import './Products.css';
import { FormControl, MenuItem, Select } from '@mui/material';

export const FiltersProducts = ({ selectCat, handleChange, categories }) => {
  return (
    <div className="containerFilters">
      <div className="boxCategories">
        <FormControl className="selectCategories">
          <Select
            value={selectCat}
            onChange={(event) => handleChange(event.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            className="selectCat"
          >
            {categories.map((c, i) => (
              <MenuItem key={i} value={c} className="menuCategories">
                <em>{c}</em>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="boxFilters"></div>
    </div>
  );
};
