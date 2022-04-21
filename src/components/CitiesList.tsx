import React, { useEffect } from 'react';
import {
  Box,
} from '@mui/material';

import CityCard from './CityCard';
import { WeatherCard } from './types';
import { getWeather } from '../api/queries';

const cards: WeatherCard[] = [
  {
    city: 'Nadvirna',
    grad: 20,
  },
  {
    city: 'Lviv',
    grad: 15,
  },
  {
    city: 'Pniv',
    grad: 15,
  },
  {
    city: 'Franik',
    grad: 15,
  }
];

export default function CitiesList() {

  useEffect(() => {
    getWeather(51.5085, -0.1257)
      .then((response) => {
        console.log(response);
      })
  }, [])
  
  return (
    <Box
      sx={{
        bgcolor: 'white',
        pt: 5,
        pb: 7,
      }}
    >
      <CityCard
        cards={cards}
      />
    </Box>
  )
}
