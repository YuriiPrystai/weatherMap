import { ICity } from "country-state-city/dist/lib/interface";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { getWeather } from "../api/queries";

import {
  CityWeather,
  DeleteWeatherCityAC,
  SetWeatherCityAC,
  SetWorldsCitiesAC,
} from "../config/types";
import { DELETE_CITY, SET_CITIES, SET_CITY } from "./actionTypes";

export const setWorldsCities = (payload: ICity[] | undefined): SetWorldsCitiesAC => ({
  type: SET_CITIES,
  payload: payload,
});

export const setWeatherCity = (payload: CityWeather): SetWeatherCityAC => ({
  type: SET_CITY,
  payload: payload,
});

export const deleteWeatherCity = (payload: number): DeleteWeatherCityAC => ({
  type: DELETE_CITY,
  payload: payload,
});

export const fetchCity = (
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
