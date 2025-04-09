import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import '../index.css';

export const DrawerRight = ({ children, icon, isOpen, handle }) => {
  return (
    <div>
      <Button onClick={handle} className="buttonDrawer">
        {icon}
      </Button>
      <Drawer open={isOpen} onClose={handle} anchor="right">
        {children}
      </Drawer>
    </div>
  );
};
