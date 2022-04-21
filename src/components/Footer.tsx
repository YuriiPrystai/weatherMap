import React from 'react';
import { Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      component="footer"
      bgcolor="#1976d2"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50px',
      }}
    >
      {'Copyright © '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    Copyright()
  );
}
