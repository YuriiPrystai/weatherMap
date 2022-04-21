import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h5" color="inherit" noWrap>
          Weathering Map
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
