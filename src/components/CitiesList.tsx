import React from 'react';
import {
  Box, Container, Typography,
} from '@mui/material';

import CityCard from './CityCard';
import {
  CitiesListProps,
  CityWeather,
  RootState,
} from '../config/types';
import { connect } from 'react-redux';

const CitiesList = (props: CitiesListProps) => {
  
  return (
    <Box
      sx={{
        bgcolor: 'white',
        pt: 5,
        pb: 7,
      }}
    >
      <Container maxWidth="md">
        {
          props.cards.length
          ? (
            <>
              <Typography
                component="p"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Weathering Map
              </Typography>
              {props.cards.map((card: CityWeather) => (
                <CityCard card={card} key={card.id} />
              ))}
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
      </Container>
    </Box>
  )
};

export default connect(
  (state: RootState) => ({
    cards: state.weatherCities,
  })
)(CitiesList);
