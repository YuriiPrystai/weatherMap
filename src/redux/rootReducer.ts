import { combineReducers } from "redux";
import { weatherCityReducer } from "./weatherCityReducer";

import { worldsCitiesReducer } from "./worldsCitiesReducer";

export const rootReducer = combineReducers({
  worldsCities: worldsCitiesReducer,
  weatherCities: weatherCityReducer,
});
