import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import {
  Route,
  Routes,
  HashRouter,
} from 'react-router-dom'

import MainPage from './pages/MainPage';
import { ROUTE_NAMES } from './config/config';
import CityDetails from './pages/CityDetails';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <HashRouter basename={ROUTE_NAMES.HOME}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path={ROUTE_NAMES.HOME} element={<MainPage />} />
          <Route path={ROUTE_NAMES.CITY.DETAILS} element={<CityDetails />}/>
        </Routes>
        <Footer />
      </HashRouter>
    </Box>
  );
}

export default App;
