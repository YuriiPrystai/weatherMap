import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';

import { CityWeather } from '../../config/types';
import { deleteWeatherCity } from '../../redux/actionCreators';
import { fetchCityToRefresh } from '../../redux/thunks';
import { ROUTE_NAMES, ROUTE_PATH_PARAMS } from '../../config/config';
import {
  bgCardImageStyles,
  buttonCardStyle,
  cardActionsStyle,
  cardContentStyle,
  verticalTextStyle,
} from './cityCardStyles';

const CityCard = (props: { card: CityWeather, isMobile: boolean }) => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const iconCardUrl = require(`../../images/${props.card.weather[0].main}.png`);

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
        borderRadius: '20px',
        width: `${props.isMobile ? '80%' : '44%'}`,
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <CardContent sx={cardContentStyle}>
          <Typography
            gutterBottom
            variant="body2"
            component="h2"
            sx={{
              display: 'flex',
              pl: 2,
              pt: 1,
              pb: 1,
              m: 0,
              alignItems: 'center',
              textDecoration: 'underline',
              bgcolor: blueGrey[100],
            }}
          >
            <LocationOnIcon />{props.card.name}
          </Typography>
          <Typography
            component="h4"
            variant={`${props.isMobile ? 'h6' : 'h3'}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: 2,
            }}
          >
            {props.card.main.temp}&nbsp;&deg;C
          </Typography>
          <Typography
            component="h4"
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: 2,
              textTransform: 'capitalize',
            }}
          >
            {props.card.weather[0].main}
          </Typography>
          <img
            height={`${props.isMobile ? '40%' : '50%'}`}
            src={iconCardUrl}
            alt="weather icon"
            style={bgCardImageStyles}
          />
        </CardContent>
        <CardActions sx={cardActionsStyle}>
          {
            isLoading
            ? <CircularProgress
                color='success'
                sx={{
                  position: 'absolute',
                  top: '0',
                  left: '-40px',
                  p: 1,
                }}
              />
            : (
              <IconButton
                color="success"
                aria-label="refresh"
                component="span"
                onClick={handleRefresh}
                sx={{
                  position: 'absolute',
                  top: '0',
                  left: '-40px',
                }}
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
              height: '100%',
            }}
          >
            <Button
              sx={buttonCardStyle}
              size="medium"
              variant="contained"
              color="success"
            >
              <Typography
                component="span"
                sx={verticalTextStyle}
              >
                View
              </Typography>
            </Button>
          </Link>
          <Button
            sx={buttonCardStyle}
            size="medium"
            variant="contained"
            color="error"
            onClick={handleDeveteCard}
          >
            <Typography
              component="span"
              sx={verticalTextStyle}
            >
              Del
            </Typography>
          </Button>
        </CardActions>
      </Box>
    </Card>       
  )
};

export default CityCard;
