import {
  Box,
  CircularProgress,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useMemo, useState } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import AirIcon from '@mui/icons-material/Air';
import { AxiosResponse } from 'axios';
import { nanoid } from 'nanoid';

import { ROUTE_PATH_PARAMS, TABLET_MEDIA_QUERY } from '../config/config';
import {
  CityDetailsProps,
  CityWeather,
  DailyForecast,
  HourlyForecast,
  RootState,
} from '../config/types';
import { getDailyForecast } from '../api/queries';
import { DefaultDailyForecast, DefaultHourlyForecast } from '../config/dailyForecastData';
import HourlyCarousel from '../components/hourlyCarousel/HourlyCarousel';
import { getDayOfWeek, millisecondsToDate } from '../helpers/convertMilliseconds';

const CityDetails = (props: CityDetailsProps) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dailyForecast, setDailyForecast] = useState<DailyForecast[]>([]);
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecast[]>([]);
  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);
  
  useMemo(() => {
    if (props.city) {
      getDailyForecast(props.city.coord.lat, props.city.coord.lon)
        .then((response: AxiosResponse) => {
          setDailyForecast(response.data.daily);
          setHourlyForecast(response.data.hourly);
        })
        .catch(err => {
          setDailyForecast(DefaultDailyForecast);
          setHourlyForecast(DefaultHourlyForecast);
        })
      // setDailyForecast(DefaultDailyForecast);
      // setHourlyForecast(DefaultHourlyForecast);
    };
  }, [props.city])

  return (
    <Box sx={{ p: isTablet ? 1.5 : 4 }}>
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
              Weather in <b>{props.city.name}</b>
            </Typography>
            <Typography
              align='left'
              component='h6'
              variant={`${isTablet ? 'h6' : 'h5'}`}
              mb={1}
            >
              <i>Daily Forecast</i>
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                mb: 5,
              }}
            >
              {
                !Object.keys(dailyForecast).length
                  ? <CircularProgress />
                  : dailyForecast.map((dayForecast) => (
                    <Paper
                      key={nanoid()}
                      elevation={10}
                      sx={{ m: 0.5 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100%',
                          p: isTablet ? 0.5 : 1,
                        }}
                      >
                        <Typography
                          component="span"
                          fontSize={isTablet ? '0.8rem' : '1rem'}
                        >
                          {millisecondsToDate(dayForecast.dt)}
                        </Typography>
                        <Typography
                          component="span"
                          fontSize={isTablet ? '0.8rem' : '1rem'}
                        >
                          {getDayOfWeek(dayForecast.dt)}
                        </Typography>
                        <img
                          src={`http://openweathermap.org/img/wn/${dayForecast.weather[0].icon}.png`}
                          width='50px'
                          height='50px'
                          alt="weather icon"
                        />
                        <Typography
                          variant={`${isTablet ? 'subtitle1' : 'h6'}`}
                          fontWeight={600}
                        >
                          {Math.round(dayForecast.temp.max * 10) / 10}&deg;
                        </Typography>
                        <Typography>{Math.round(dayForecast.temp.min * 10) / 10}&deg;</Typography>
                        {!isTablet && (
                          <Box sx={{ display: 'flex' }}>
                            <AirIcon />&thinsp;<Typography>
                              {Math.round(dayForecast.wind_speed * 10) / 10}m/s
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Paper>
                  ))
              }
            </Box>
            <Typography
              align='left'
              component='h6'
              variant={`${isTablet ? 'h6' : 'h5'}`}
              mb={1}
            >
              <i>Hourly Forecast</i>
            </Typography>
            <HourlyCarousel hourlyForecast={hourlyForecast} />
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
