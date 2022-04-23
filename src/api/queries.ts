import { APP_ID } from "../config/config";
import { sendRequest } from "./api";

export const getWeather = (lat: number, lon: number) => sendRequest(
  'GET',
  `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`,
);

export const getCity = (name: string, limit: number = 5) => sendRequest(
  'GET',
  `/geo/1.0/direct?q=${name}&limit=${limit}&appid={${APP_ID}}`,
);
