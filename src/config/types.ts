import { ICity } from "country-state-city/dist/lib/interface";

import { DELETE_CITY, FETCH_CITY, REFRESH_CITY, SET_CITIES, SET_CITY } from "../redux/actionTypes";
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

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export interface DailyForecast {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
  uvi: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
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

export interface MainPageProps {
  worldsCities: ICity[] | [],
  weatherCities: CityWeather[] | [],
  dispatch: AppDispatch,
};

export interface CityDetailsProps {
  city: CityWeather | undefined,
  dispatch: AppDispatch,
};
// Reducers
export interface RootState {
  worldsCities: ICity[],
  weatherCities: CityWeather[],
};

export type CityWeatherReducer = SetWeatherCityAC | DeleteWeatherCityAC | RefreshWeatherCityAC;
// Actions
export interface SetWorldsCitiesAC {
  type: typeof SET_CITIES,
  payload: ICity[] | undefined,
};

export interface SetWeatherCityAC {
  type: typeof SET_CITY,
  payload: CityWeather,
};

export interface RefreshWeatherCityAC {
  type: typeof REFRESH_CITY,
  payload: CityWeather,
};

export interface DeleteWeatherCityAC {
  type: typeof DELETE_CITY,
  payload: CityWeather,
};

export interface FetchCityAC {
  type: typeof FETCH_CITY,
  payload: {
    lat: number,
    lon: number,
  },
};
