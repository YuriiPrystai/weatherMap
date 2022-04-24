import { ICity } from "country-state-city/dist/lib/interface";

import {
  CityWeather,
  DeleteWeatherCityAC,
  RefreshWeatherCityAC,
  SetWeatherCityAC,
  SetWorldsCitiesAC,
} from "../config/types";
import { DELETE_CITY, REFRESH_CITY, SET_CITIES, SET_CITY } from "./actionTypes";

export const setWorldsCities = (payload: ICity[] | undefined): SetWorldsCitiesAC => ({
  type: SET_CITIES,
  payload: payload,
});

export const setWeatherCity = (payload: CityWeather): SetWeatherCityAC => ({
  type: SET_CITY,
  payload: payload,
});

export const refreshWeatherCity = (payload: CityWeather): RefreshWeatherCityAC => ({
  type: REFRESH_CITY,
  payload: payload,
});

export const deleteWeatherCity = (payload: CityWeather): DeleteWeatherCityAC => ({
  type: DELETE_CITY,
  payload: payload,
});
