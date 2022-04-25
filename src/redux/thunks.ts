import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { getWeather } from "../api/queries";
import { CityWeather } from "../config/types";
import { refreshWeatherCity, setWeatherCity } from "./actionCreators";

export const fetchCityToAdd = (
  lat: number,
  lon: number,
  setIsLoading: Function,
  handleClose: Function,
): any => (
  (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    setIsLoading(true);
    getWeather(lat, lon)
      .then((response) => {
        setIsLoading(false);
        dispatch(setWeatherCity(response.data));
        handleClose();
      });
  }
);

export const fetchCityToRefresh = (
  lat: number,
  lon: number,
  setIsLoading: Function,
): any => (
  (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    setIsLoading(true);
    getWeather(lat, lon)
      .then((response) => {
        setIsLoading(false);
        dispatch(refreshWeatherCity(response.data));
      });
  }
);

export const fetchAllCitiesToRefresh = (
  weatherCities: CityWeather[],
  setIsLoading: Function,
): any => (
  (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    setIsLoading(true);
    weatherCities.forEach(city => {
      getWeather(city.coord.lat, city.coord.lon)
        .then((response) => {
          dispatch(refreshWeatherCity(response.data));
        });
    });
    setIsLoading(false);
  }
);
