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
import { TABLET_MEDIA_QUERY } from '../config/config';

const CitiesList = (props: CitiesListProps) => {

  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);

  return (
    <Box
      sx={{
        bgcolor: 'white',
        pt: isTablet ? 3 : 5,
        pb: isTablet ? 3 : 5,
      }}
    >
      {props.cards.length
        ? (
          <>
            <Typography
              component="p"
              variant={`${isTablet ? 'h5' : 'h3'}`}
              mb={isTablet ? 3 : 5}
              align="center"
              gutterBottom
            >
              Weathering Map
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: `${isTablet ? 'column' : 'row'}`,
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
                gridRowGap: `${isTablet ? '1rem' : '2rem'}`,
                rowGap: `${isTablet ? '1rem' : '2rem'}`,
              }}
            >
              {props.cards.map((card: CityWeather) => (
                <CityCard
                  card={card}
                  key={card.id}
                  isTablet={isTablet}
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
