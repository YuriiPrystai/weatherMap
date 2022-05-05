import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_NAMES } from '../config/config';

const Header = () => (
  <AppBar position="relative">
    <Toolbar>
      <Typography variant="h5" color="inherit" noWrap>
        <Link
          to={ROUTE_NAMES.HOME}
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Weathering Map
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
