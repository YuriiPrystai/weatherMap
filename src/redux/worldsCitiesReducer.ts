import { ICity } from "country-state-city/dist/lib/interface";
import { SetWorldsCitiesAC } from "../config/types";

import { SET_CITIES } from "./actionTypes";

const initState: ICity[] = [];

export const worldsCitiesReducer = (
  state: ICity[] = initState,
  action: SetWorldsCitiesAC,
) => {
  switch(action.type) {
    case SET_CITIES: {
      const cities = action.payload ? action.payload : [];
      return [
        ...state,
        ...cities,
      ];
    }
    default: return state;
  }
}