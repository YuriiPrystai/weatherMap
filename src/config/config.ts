export const BODY_TYPE_JSON: string = 'application/json';
export const BASE_URL: string = 'https://api.openweathermap.org';
export const APP_ID: string = '30487608b32c0d8676ccace3d5381145';

export const ROUTE_PATH_PARAMS = {
  CITY: {
    ID: 'cityId',
  },
}

export const ROUTE_NAMES = {
  HOME: '/',
  CITY: {
    DETAILS: `/city/:${ROUTE_PATH_PARAMS.CITY.ID}/details`,
  },
};
