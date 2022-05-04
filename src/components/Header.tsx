import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const Header = () => (
  <AppBar position="relative">
    <Toolbar>
      <Typography variant="h5" color="inherit" noWrap>
        Weathering Map
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
