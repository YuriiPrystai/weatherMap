import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import { TABLET_MEDIA_QUERY } from "../../config/config";
import { HourlyForecast, HourlyItemHeight } from "../../config/types";
import CarouselCard from "./CarouselCard";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const HourlyCarousel = ({ hourlyForecast }: { hourlyForecast: HourlyForecast[] }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [position, setPosition] = useState<number>(0);
  const [hourlyItemHeight, setHourlyItemHeight] = useState<HourlyItemHeight>();
  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);

  useEffect(() => {
    const hourlyTemp: number[] = hourlyForecast.map(hourForecast => hourForecast.temp);    
    hourlyTemp.length && setHourlyItemHeight({
      minTemp: Math.min(...hourlyTemp),
      maxTemp: Math.max(...hourlyTemp),
    });
  }, [hourlyForecast]);  
  
  const isItemSelected = (id: string): boolean => !!selected.find((el) => el === id);

  const handleClick = (id: string) => ({ getItemById, scrollToItem }: any) => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

  return (
    <ScrollMenu
      LeftArrow={isTablet ? 'none' : LeftArrow}
      RightArrow={isTablet ? 'none' : RightArrow}
    >
      {hourlyForecast.map((item, index) => (
        <CarouselCard
          key={index.toString()}
          itemId={index.toString()}
          data={item}
          hourlyItemHeight={hourlyItemHeight}
          onClick={handleClick(index.toString())}
          selected={isItemSelected(index.toString())}
        />)
      )}
    </ScrollMenu>
  );
};

export default HourlyCarousel;
