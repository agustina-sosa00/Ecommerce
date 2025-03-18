import React from 'react';
import './Products.css';
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';

export const FiltersProducts = () => {
  return (
    <div className="containerFilters">
      <div className="boxCategories">
        <FormControl className="selectCategories">
          <Select
            //   value={age}
            //   onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            className="selectCategories"
          >
            <MenuItem value="" className="menuCategories">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="boxFilters"></div>
    </div>
  );
};
