import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import MainPage from './pages/MainPage';
import { ROUTE_NAMES } from './config/config';
import CityDetails from './pages/CityDetails';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Header />
        <Routes>
          <Route path={ROUTE_NAMES.HOME} element={<MainPage />} />
          <Route path={ROUTE_NAMES.CITY.DETAILS} element={<CityDetails />}/>
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
