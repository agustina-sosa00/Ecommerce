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
          <div className="flex items-center justify-center h-full">{icon}</div>
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
