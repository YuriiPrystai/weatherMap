import React from 'react';
import { Box, Typography } from '@mui/material';

import CityCard from './cityCard/CityCard';
import {
  CitiesListProps,
  CityWeather,
  RootState,
} from '../config/types';
import { connect } from 'react-redux';

const CitiesList = (props: CitiesListProps) => (
  <Box
    sx={{
      bgcolor: 'white',
      pt: 5,
      pb: 7,
    }}
  >
    {props.cards.length
      ? (
        <>
          <Typography
            component="p"
            variant="h3"
            mb={5}
            align="center"
            gutterBottom
          >
            Weathering Map
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
              gridRowGap: '2rem',
              rowGap: '2rem',
            }}
          >
            {props.cards.map((card: CityWeather) => (
              <CityCard card={card} key={card.id} />
            ))}
          </Box>
        </>
      )
      : (
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 2,
          }}
        >
          There are no cities to display weather
        </Typography>
      )
    }
  </Box>
);

export default connect(
  (state: RootState) => ({
    cards: state.weatherCities,
  })
)(CitiesList);
