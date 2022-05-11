import { CAROUSEL_ITEM_COLOR_HEIGHT } from "../config/config";

export const calculateHeightHourlyItem = (
  minTemp: number | undefined,
  maxTemp: number | undefined,
  currTemp: number,
): number => {
  if (minTemp && maxTemp) {
    const percentCurrTemp = (currTemp - minTemp + 2) / (maxTemp - minTemp + 2);
    return CAROUSEL_ITEM_COLOR_HEIGHT * percentCurrTemp;
  }
  return CAROUSEL_ITEM_COLOR_HEIGHT;
};