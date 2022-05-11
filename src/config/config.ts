export const BODY_TYPE_JSON = 'application/json';
export const BASE_URL = 'https://api.openweathermap.org';
export const APP_ID = '30487608b32c0d8676ccace3d5381145';

export const ROUTE_PATH_PARAMS = {
  CITY: {
    ID: 'cityId',
  },
};

export const ROUTE_NAMES = {
  HOME: '/',
  CITY: {
    DETAILS: `/city/:${ROUTE_PATH_PARAMS.CITY.ID}/details`,
  },
};

export const CAROUSEL_ITEM_HEIGHT: number = 250;
export const CAROUSEL_ITEM_HEADER_HEIGHT: number = CAROUSEL_ITEM_HEIGHT * 0.34;
export const CAROUSEL_ITEM_COLOR_HEIGHT: number = CAROUSEL_ITEM_HEIGHT - CAROUSEL_ITEM_HEADER_HEIGHT;

export const TABLET_MEDIA_QUERY: string = '(max-width: 900px)';
