import { Box, Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { City }  from 'country-state-city';
import { useDispatch, connect } from 'react-redux';
import { ICity } from 'country-state-city/dist/lib/interface';

import AddCityPopup from '../components/addCityPopup/AddCityPopup';
import { setWorldsCities } from '../redux/actionCreators';
import CitiesList from '../components/CitiesList';
import { MainPageProps, RootState } from '../config/types';

const MainPage = (props: MainPageProps) => {
  const dispatch = useDispatch();
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);
  const handleOpen: () => void = () => setPopupIsOpen(true);
  const handleClose: () => void = () => setPopupIsOpen(false);

  useEffect(() => {
    if (!props.worldsCities.length) {
      const cities: ICity[] | undefined = City.getCitiesOfCountry('UA');  
      dispatch(setWorldsCities(cities));
    };
  }, []);

  return (
    <Container maxWidth="md" sx={{ mb: 4 }}>
      <CitiesList />
      <Box
        textAlign='right'
      >
        <Button
          variant="contained"
          color="success"
          onClick={handleOpen}
        >
          Add City
        </Button>
      </Box>
      <AddCityPopup
        open={popupIsOpen}
        handleClose={handleClose}
      />
    </Container>
  )
};

export default connect(
  (state: RootState) => ({
    worldsCities: state.worldsCities,
  })
)(MainPage);
