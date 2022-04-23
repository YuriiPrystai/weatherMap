import { ICity } from "country-state-city/dist/lib/interface";

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
