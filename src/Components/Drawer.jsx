import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import '../Components/Cart/Cart.css';

export const DrawerRight = ({
  children,
  icon,
  isOpen,
  handle,
  quantityCart,
}) => {
  return (
    <div>
      <div className="drawerCart">
        <Button onClick={handle} className="buttonDrawer">
          {icon}
        </Button>
        <div className="countCart">{quantityCart}</div>
      </div>

      <Drawer
        open={isOpen}
        onClose={handle}
        anchor="right"
        className="modalDrawer"
      >
        {children}
      </Drawer>
    </div>
  );
};
