import React from 'react';
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { TABLET_MEDIA_QUERY } from '../config/config';

const Copyright = () => {

  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);

  return (
    <Box sx={{ mt: 'auto' }}>
      <Typography
        variant={`${isTablet ? 'body2' : 'h6' }`}
        align="center"
        component="footer"
        bgcolor="#1976d2"
        color="white"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '50px',
        }}
      >
        {'Created by Yurii Prystai © '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  )
};

const Footer = () => Copyright();

export default Footer;
