import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './viewCart.css';
import { Count } from './Count';
import { formatPrice } from '../../Utils/formatPrice';
import { TableFooter } from '@mui/material';
import { ButtonWhatsapp } from './ButtonWhatsapp';

export const TableCart = ({ cart, total }) => {
  const headerTitles = ['Products', 'Quantity', 'Unit Price', 'Total Price'];
  return (
    <TableContainer component={Paper} className="container-tableCart">
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className="table-cart"
      >
        <TableHead className="tableCart-header">
          <TableRow>
            {headerTitles.map((item) => (
              <TableCell key={item} align="left">
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
                {prod.title}
              </TableCell>
              <TableCell align="left" className="prod-Cart">
                <Count product={prod} />
              </TableCell>
              <TableCell align="left" className="prod-Cart">
                {formatPrice(prod.price)}
              </TableCell>
              <TableCell align="left" className="prod-Cart">
                {formatPrice(prod.price * prod.quantity)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className="tableFooter-Cart">
          <TableRow>
            <TableCell colSpan={3}></TableCell>
            <TableCell colSpan={1} className="titleTableFooter-cart">
              Total {formatPrice(total)}
              <ButtonWhatsapp order={cart} total={total} />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
