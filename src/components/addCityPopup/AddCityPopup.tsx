import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { nanoid } from 'nanoid'
import {
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { AddCityPopupProps, RootState } from '../../config/types';
import { closeButtonStyle, modalStyle } from './addCityPopupStyles';
import { getWeather } from '../../api/queries';
import { connect, useDispatch } from 'react-redux';
import { ICity } from 'country-state-city/dist/lib/interface';
import { setWeatherCity } from '../../redux/actionCreators';

const AddCityPopup = (props: AddCityPopupProps) => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(!props.cities);

  const handleChange = (event: SelectChangeEvent): void => {
    setCityName(event.target.value as string);
  };

  const handleAddCity = (): void => {
    const selectedCity: ICity | undefined = props.cities.find(city => city.name === cityName);
    if (!!selectedCity?.latitude && !!selectedCity?.longitude) {
      setIsLoading(true);
      getWeather(Number(selectedCity.latitude), Number(selectedCity.longitude))
        .then((response) => {
          setIsLoading(false);
          dispatch(setWeatherCity(response.data));
          props.handleClose();
        });
    };
  };  

  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => {
          props.handleClose();
          setCityName('');
        }}
      >
        <Box sx={modalStyle}>
          <IconButton
            color="error"
            aria-label="close picture"
            component="span"
            sx={closeButtonStyle}
            onClick={() => {
              props.handleClose();
              setCityName('');
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography align='center' variant="h6" component="h2" sx={{ mb: 2 }}>
            Select a new City to add
          </Typography>
          {
            isLoading
            ? <CircularProgress />
            : (
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={cityName}
                  label="City"
                  onChange={handleChange}
                >
                  {
                    props.cities.map((city) => {
                      return <MenuItem key={nanoid()} value={city.name}>{city.name}</MenuItem>
                    })
                  }
                </Select>
              </FormControl>
            )
          }
          <Button
            size="medium"
            variant="contained"
            color="success"
            sx={{ width: '50%' }}
            disabled={!cityName}
            onClick={handleAddCity}
          >
            ADD
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default connect(
  (state: RootState) => ({
    cities: state.worldsCities,
  })
)(AddCityPopup);
