import { ICity } from "country-state-city/dist/lib/interface";
import { DELETE_CITY, SET_CITIES, SET_CITY } from "../redux/actionTypes";
import { AppDispatch } from "../redux/store";

export interface CityWeather {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
};
export interface AddCityPopupProps {
  open: boolean,
  handleClose: () => void,
  cities: ICity[],
  dispatch: AppDispatch,
};

export interface CitiesListProps {
  cards: CityWeather[],
  dispatch: AppDispatch,
};

// Reducers
export interface RootState {
  worldsCities: ICity[],
  weatherCities: CityWeather[],
}
export type WeatherCity = SetWeatherCityAC | DeleteWeatherCityAC;

// Actions
export interface SetWorldsCitiesAC {
  type: typeof SET_CITIES,
  payload: ICity[] | undefined,
}
export interface SetWeatherCityAC {
  type: typeof SET_CITY,
  payload: CityWeather,
}
export interface DeleteWeatherCityAC {
  type: typeof DELETE_CITY,
  payload: number,
}
