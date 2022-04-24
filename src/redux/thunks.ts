import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { getWeather } from "../api/queries";
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
