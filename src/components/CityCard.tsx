import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useCallback } from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import { yellow } from '@mui/material/colors';

import { CityWeather } from '../config/types';
import { useDispatch } from 'react-redux';
import { deleteWeatherCity } from '../redux/actionCreators';

export default function CityCard(props: { card: CityWeather }) {

const dispatch = useDispatch();
const handleDeveteCard = useCallback((id: number) => {
  dispatch(deleteWeatherCity(id));
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
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        {props.card.name}
      </Typography>
      <Typography>
        Temperature {props.card.main.temp}
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        justifyContent: 'flex-end'
      }}
    >
      <Button size="medium" variant="contained" color="success">View</Button>
      <Button
        size="medium"
        variant="contained"
        color="error"
        onClick={() => handleDeveteCard(props.card.id)}
      >
        Delete
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="span">
        <RefreshIcon />
      </IconButton>
    </CardActions>
  </Card>       
  )
}
