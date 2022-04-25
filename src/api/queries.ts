import { APP_ID } from "../config/config";
import { sendRequest } from "./api";

export const getWeather = (lat: number, lon: number) => sendRequest(
  'GET',
  `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`,
);
