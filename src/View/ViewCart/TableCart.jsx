import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCart } from '../../Context/cartContext';
import './viewCart.css';
import { cutTitle } from '../../Utils/cutTitle';
import { Count } from './Count';

export const TableCart = () => {
  const { cart } = useCart();
  const headerTitles = ['Products', 'Quantity', 'Price', 'Total Price'];
  return (
    <TableContainer component={Paper} className="container-tableCart">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="tableCart-header">
          <TableRow>
            {headerTitles.map((item) => (
              <TableCell key={item} align="left" className="titleTable-cart">
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((prod, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" className="prod-Cart">
                {cutTitle(prod.title, 20)}
              </TableCell>
              <TableCell align="left" className="prod-Cart">
                <Count />
              </TableCell>
              <TableCell align="left" className="prod-Cart">
                {prod.price}
              </TableCell>
              <TableCell align="left" className="prod-Cart">
                {prod.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
