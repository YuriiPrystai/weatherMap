import { CityWeather, CityWeatherReducer } from "../config/types";
import { DELETE_CITY, REFRESH_CITY, SET_CITY } from "./actionTypes";

const initState: CityWeather[] = [];

export const weatherCityReducer = (
  state: CityWeather[] = initState,
  action: CityWeatherReducer,
) => {
  switch(action.type) {
    case SET_CITY: {
      return [
        ...state,
        action.payload,
      ];
    }
    case DELETE_CITY: {
      const newCities = state.filter(city => city.id !== action.payload.id);
      return [ ...newCities ];
    }
    case REFRESH_CITY: {
      const updatedCities = state.map(city => {
        if (city.id === action.payload.id) {
          return action.payload;
        } else {
          return city;
        }
      })
      return updatedCities;
    }
    default: return state;
  }
};
