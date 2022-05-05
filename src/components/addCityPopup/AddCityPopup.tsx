import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  CircularProgress,
  FormControl,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { connect, useDispatch } from 'react-redux';
import { ICity } from 'country-state-city/dist/lib/interface';
import AsyncSelect from "react-select/async";
import { createFilter, SingleValue } from 'react-select';
import { City } from 'country-state-city';
import VirtualList from 'react-tiny-virtual-list';

import { AddCityPopupProps, RootState } from '../../config/types';
import { closeButtonStyle, modalStyle } from './addCityPopupStyles';
import { fetchCityToAdd } from '../../redux/thunks';
import { setWorldsCities } from '../../redux/actionCreators';

const AddCityPopup = (props: AddCityPopupProps) => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(!props.cities);

  const handleAddCity = (): void => {
    const selectedCity: ICity | undefined = props.cities.find(city => city.name === cityName);
    if (!!selectedCity?.latitude && !!selectedCity?.longitude) {
      dispatch(fetchCityToAdd(
        Number(selectedCity.latitude),
        Number(selectedCity.longitude),
        setIsLoading,
        props.handleClose,
      ));
      setCityName('');
    }
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: ICity[]) => void
  ) => {
    let cities: ICity[] | undefined = [...props.cities];
    if (!cities.length) {      
      cities = City.getCitiesOfCountry('UA');
      if (cities) {
        cities = cities.map(city => {
          return {
            ...city,
            label: city.name,
            value: city.name,
          }
        });
        dispatch(setWorldsCities(cities));
        callback(cities);
      }
    } else {
      callback(cities.map(city => {
        return {
          ...city,
          label: city.name,
          value: city.name,
        }
      }));
    }
  };

  const MenuList = (props: any) => (
    <VirtualList
      width="100%"
      height={300}
      itemCount={props.options.length}
      itemSize={35}
      renderItem={({ index, style }) => (
        <div key={index} style={style}>
          {React.Children.toArray(props.children)[index]}
        </div>
      )}
    />
  );

  return (
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
        {isLoading
          ? <CircularProgress sx={{ mb: 2 }} />
          : (
            <FormControl fullWidth sx={{ mb: 3 }}>
              <AsyncSelect
                components={{ MenuList }}
                cacheOptions
                defaultOptions
                loadOptions={loadOptions}
                onChange={(newValue: SingleValue<ICity>) => {   
                  setCityName(newValue ? newValue.name : '');
                }}
                isSearchable={false}
                filterOption={createFilter({ ignoreAccents: false })}
              />
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
  );
};

export default connect(
  (state: RootState) => ({
    cities: state.worldsCities,
  })
)(AddCityPopup);
