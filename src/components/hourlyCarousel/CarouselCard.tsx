import { Box, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";
import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import {
  CAROUSEL_ITEM_COLOR_HEIGHT,
  CAROUSEL_ITEM_HEADER_HEIGHT,
  CAROUSEL_ITEM_HEIGHT,
} from "../../config/config";
import { CarouselCardProps } from "../../config/types";
import { calculateHeightHourlyItem } from "../../helpers/calculateHeightHourlyItem";
import { millisecondsToHours } from "../../helpers/convertMilliseconds";

const CarouselCard = ({
  onClick,
  selected,
  data,
  hourlyItemHeight,
  itemId
}: CarouselCardProps) => {
  
  const visibility = useContext(VisibilityContext);

  return (
    <Box
      onClick={() => onClick(visibility)}
      pt={1}
      sx={{
        width: "60px",
        backgroundColor: selected ? 'tan' : 'white',
        border: '1px #F1F1F1FF solid',
      }}
    >
      <Typography align="center" fontSize={14}>
        <b>{millisecondsToHours(data.dt)}</b>&nbsp;00
      </Typography>
      <Box
        height={CAROUSEL_ITEM_HEIGHT}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          height={CAROUSEL_ITEM_HEADER_HEIGHT}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt="weather icon"
          />
          {Math.round(data.temp * 10) / 10}&deg;
        </Box>
          <Box
            height={
              !hourlyItemHeight
                ? CAROUSEL_ITEM_COLOR_HEIGHT
                : calculateHeightHourlyItem(
                    hourlyItemHeight.minTemp,
                    hourlyItemHeight.maxTemp,
                    data.temp,
                  )
            }
            bgcolor={amber[600]}
          />
      </Box>
    </Box>
  );
};

export default CarouselCard;
