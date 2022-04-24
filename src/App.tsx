import React from 'react';
import { CssBaseline } from '@mui/material';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import MainPage from './pages/MainPage';
import { ROUTE_NAMES } from './config/config';
import CityDetails from './pages/CityDetails';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path={ROUTE_NAMES.HOME} element={<MainPage />} />
        <Route path={ROUTE_NAMES.CITY.DETAILS} element={<CityDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
