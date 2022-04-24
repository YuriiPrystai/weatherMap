import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Header from '../components/Header';
import { ROUTE_PATH_PARAMS } from '../config/config';
import { CityDetailsProps, CityWeather, RootState } from '../config/types';

const alignStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const itemStyle = {
  ...alignStyle,
  marginBottom: '20px',
  "&:last-child": {
    mb: 0,
  },
}

const CityDetails = (props: CityDetailsProps) => {  

  return (
    <div>
      <Header />
      <Box
        sx={{
          p: 3,
          pr: 40,
          pl: 40,
        }}
      >
        {
          props.city && Object.keys(props.city).length
          ? (
            <>
              <Typography align='center' component="h4" variant='h4' mb={3}>
                Weather in {props.city.name}<LocationOnIcon />
              </Typography>
              <Container
                sx={{
                  borderRadius: '10px',
                  boxShadow: '0 0 20px 2px #EBDE6CFF',
                  padding: '20px 40px',
                }}
              >
                <Typography align='left' component="p" variant='body1' sx={{ ...itemStyle, justifyContent: 'space-around' }}>
                  <Box sx={alignStyle}><ThermostatIcon /> Air temperature {props.city.main.temp}&deg;C</Box>
                  <Box sx={alignStyle}><ThermostatIcon /> Air temperature {Math.round(props.city.main.temp * 33.8)}&deg;F</Box>
                </Typography>
                <Typography align='left' component="p" variant='body1' sx={{ ...itemStyle, justifyContent: 'space-around' }}>
                  <Box sx={alignStyle}><ThermostatIcon /> Air temperature (feels like) {props.city.main.feels_like}&deg;C</Box>
                  <Box sx={alignStyle}><ThermostatIcon /> Air temperature (feels like) {Math.round(props.city.main.feels_like * 33.8)}&deg;F</Box>
                </Typography>
                <Typography align='left' component="p" variant='body1' sx={{ ...itemStyle, justifyContent: 'space-around' }}>
                  <Box sx={alignStyle}><AirIcon /> Wind speed {props.city.wind.speed}m/s</Box>
                  <Box sx={alignStyle}><AirIcon /> Wind speed {Math.round(props.city.main.temp * 3.6)}km/h</Box>
                </Typography>
                <Typography align='left' component="p" variant='body1' sx={itemStyle}>
                  <Box sx={alignStyle}>Pressure {Math.round(props.city.main.pressure / 1.33322387415)}mm Hg</Box>
                </Typography>
                <Typography align='left' component="p" variant='body1' sx={{ ...itemStyle, justifyContent: 'space-around' }}>
                  <Box sx={alignStyle}><VisibilityIcon /> Visibility {props.city.visibility} meters</Box>
                  <Box sx={alignStyle}><VisibilityIcon /> Visibility {Math.round(props.city.visibility * 3.2808399)} feets</Box>
                </Typography>
              </Container>
            </>
          )
          : (
            <Typography align='center' component="h4" variant='h4'>
              There is no information about weather forecast
            </Typography>
          )
        }
      </Box>
    </div>
  )
}

export default connect(
  (state: RootState) => {
    const cityId: string | undefined = useParams()[`${ROUTE_PATH_PARAMS.CITY.ID}`];
    const city: CityWeather | undefined = state.weatherCities.find(city => city.id === Number(cityId));
    return {city};
  }
)(CityDetails);
