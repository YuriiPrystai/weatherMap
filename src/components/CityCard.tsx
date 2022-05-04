import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useCallback } from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import { yellow } from '@mui/material/colors';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirIcon from '@mui/icons-material/Air';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

import { CityWeather } from '../config/types';
import { deleteWeatherCity } from '../redux/actionCreators';
import { fetchCityToRefresh } from '../redux/thunks';
import { ROUTE_NAMES, ROUTE_PATH_PARAMS } from '../config/config';

export default function CityCard(props: { card: CityWeather }) {

const dispatch = useDispatch();
const [isLoading, setIsLoading] = React.useState<boolean>(false);

const handleDeveteCard = useCallback(() => {
  dispatch(deleteWeatherCity(props.card));
}, []);

const handleRefresh = useCallback(() => {
  dispatch(fetchCityToRefresh(props.card.coord.lat, props.card.coord.lon, setIsLoading));
}, []);

return (
  <Card
    raised
    sx={{
      id: props.card.id,
      bgcolor: yellow[200],
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      mb: 2,
      "&:last-child": {
        mb: 0,
      },
    }}
  >
    <Box sx={{ display: 'flex' }}>
      <CardContent
        sx={{
          flexGrow: 1,
          width: '50%',
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LocationOnIcon />{props.card.name}
        </Typography>
        <Typography
          component="h4"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <ThermostatIcon />{props.card.main.temp}&deg;
        </Typography>
        <Typography
          component="h4"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AirIcon />{props.card.wind.speed} m/s
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-end',
          width: '50%',
        }}
      >
        {
          isLoading
          ? <CircularProgress sx={{ p: 1 }} />
          : (
            <IconButton
              color="primary"
              aria-label="refresh"
              component="span"
              onClick={handleRefresh}
            >
              <RefreshIcon />
            </IconButton>
          )
        }
        <Link
          to={ROUTE_NAMES.CITY.DETAILS.replace(
            `:${ROUTE_PATH_PARAMS.CITY.ID}`,
            `${props.card.id}`)}
          style={{
            textDecoration: 'none',
            width: '70%',
          }}
        >
           <Button
            sx={{
              width: '100%',
              borderRadius: '0',
            }}
            size="medium"
            variant="contained"
            color="success"
          >
            View details
          </Button>
        </Link>
        <Button
          sx={{
            width: '70%',
            borderRadius: '0',
          }}
          size="medium"
          variant="contained"
          color="error"
          onClick={handleDeveteCard}
        >
          Delete city
        </Button>
      </CardActions>
    </Box>
  </Card>       
  )
};
