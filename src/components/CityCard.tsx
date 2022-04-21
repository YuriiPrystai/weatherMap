import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import { yellow } from '@mui/material/colors';
import { WeatherCard } from './types';

export default function CityCard(prop: { cards: WeatherCard[] }) {
  return (
    <Container maxWidth="md">
      {
        prop.cards.length
        ? (
          <Box
            sx={{
              mb: 4,
            }}
          >
            <Typography
              component="p"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Weathering Map
            </Typography>
            <Container maxWidth="md">
              {
                prop.cards.map(card => (
                  <Card
                    raised
                    sx={{
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
                        {card.city}
                      </Typography>
                      <Typography>
                        Temperature {card.grad}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        justifyContent: 'flex-end'
                      }}
                    >
                      <Button size="medium" variant="contained" color="success">View</Button>
                      <Button size="medium" variant="contained" color="error">Delete</Button>
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <RefreshIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                ))
              }
            </Container>
          </Box>
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
      <Box
        textAlign='right'
      >
        <Button
          variant="contained"
          color="success"
        >
          Add City
        </Button>
      </Box>
    </Container>
  )
}
