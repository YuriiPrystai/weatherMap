import { Box, Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { City }  from 'country-state-city';

import AddCityPopup from '../components/addCityPopup/AddCityPopup'
import CitiesList from '../components/CitiesList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useDispatch } from 'react-redux';
import { setWorldsCities } from '../redux/actionCreators';
import { ICity } from 'country-state-city/dist/lib/interface';

export default function MainPage() {
  const dispatch = useDispatch();
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);
  const handleOpen: () => void = () => setPopupIsOpen(true);
  const handleClose: () => void = () => setPopupIsOpen(false);

  useEffect(() => {
    const cities: ICity[] | undefined = City.getCitiesOfCountry('UA');  
    dispatch(setWorldsCities(cities));
  }, []);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}
