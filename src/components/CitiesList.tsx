import React from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import CityCard from './cityCard/CityCard';
import {
  CitiesListProps,
  CityWeather,
  RootState,
} from '../config/types';

const CitiesList = (props: CitiesListProps) => {

  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
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
              variant={`${isMobile ? 'h4' : 'h3'}`}
              mb={5}
              align="center"
              gutterBottom
            >
              Weathering Map
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: `${isMobile ? 'column' : 'row'}`,
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
                gridRowGap: '2rem',
                rowGap: '2rem',
              }}
            >
              {props.cards.map((card: CityWeather) => (
                <CityCard
                  card={card}
                  key={card.id}
                  isMobile={isMobile}
                />
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
)};

export default connect(
  (state: RootState) => ({
    cards: state.weatherCities,
  })
)(CitiesList);
