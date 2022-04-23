import { CityWeather, WeatherCity } from "../config/types";
import { DELETE_CITY, SET_CITY } from "./actionTypes";

const initState: CityWeather[] = [];

export const weatherCityReducer = (
  state: CityWeather[] = initState,
  action: WeatherCity,
) => {
  switch(action.type) {
    case SET_CITY: {
      return [
        ...state,
        action.payload,
      ];
    }
    case DELETE_CITY: {
      const newCities = state.filter(city => city.id !== action.payload);
      return [ ...newCities ];
    }
    default: return state;
  }
};
