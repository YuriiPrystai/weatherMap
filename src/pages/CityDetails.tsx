import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useMemo, useState } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { ROUTE_PATH_PARAMS } from '../config/config';
import { CityDetailsProps, CityWeather, DailyForecast, RootState } from '../config/types';
import { getDailyForecast } from '../api/queries';
import { AxiosResponse } from 'axios';
import { DefaultDailyForecast } from '../config/dailyForecastData';
import { nanoid } from 'nanoid';

const CityDetails = (props: CityDetailsProps) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dailyForecast, setDailyForecast] = useState<DailyForecast[]>([]);
  const isTablet = useMediaQuery('(max-width: 900px)');

  useMemo(() => {
    if (props.city) {
      // getDailyForecast(props.city.coord.lat, props.city.coord.lon)
      //   .then((response: AxiosResponse) => {
      //     setDailyForecast(response.data.daily);
      //   })
      //   .catch(err => {
      //     setDailyForecast(DefaultDailyForecast);
      //   })
      setDailyForecast(DefaultDailyForecast);
    };
  }, [props.city])

  return (
    <Box sx={{ p: 4 }}>
      {
        props.city && Object.keys(props.city).length
        ? (
          <>
            <Typography
              align='center'
              component="h4"
              variant={`${isTablet ? 'h5' : 'h4'}`}
              mb={isTablet ? 2 : 3}
            >
              Weather in {props.city.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                },
              }}
            >
              {
                !Object.keys(dailyForecast).length
                  ? <CircularProgress />
                  : dailyForecast.map((dayForecast) => {
                    const date = new Date(dayForecast.dt * 1000);        
                    return (
                      <Paper
                        key={nanoid()}
                        elevation={10}
                        sx={{
                          width: isTablet ? '130px' : '175px',
                          height: isTablet ? '130px' : '175px',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%',
                            p: 1,
                          }}
                        >
                          <Typography
                            component="span"
                            fontSize={isTablet ? '0.8rem' : '1rem'}
                          >
                            {date.toLocaleDateString('en-GB')}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <img
                              src={`http://openweathermap.org/img/wn/${dayForecast.weather[0].icon}${isTablet ? '' : '@2x'}.png`}
                              alt="weather icon"
                            />
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                              }}
                            >
                              <Typography variant='h6'>{dayForecast.temp.max}&deg;</Typography>
                              <Typography>{dayForecast.temp.min}&deg;</Typography>
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex' }}>
                            <AirIcon />&thinsp;<Typography>{dayForecast.wind_speed}m/s</Typography>
                          </Box>
                        </Box>
                      </Paper>
                    )
                  })
              }
            </Box>
            
          </>
        )
        : (
          <Typography align='center' component="h4" variant='h4'>
            There is no information about weather forecast
          </Typography>
        )
      }
    </Box>
  )
};

export default connect(
  (state: RootState) => {
    const cityId: string | undefined = useParams()[`${ROUTE_PATH_PARAMS.CITY.ID}`];
    const city: CityWeather | undefined = state.weatherCities.find(city => city.id === Number(cityId));
    return {city};
  }
)(CityDetails);
