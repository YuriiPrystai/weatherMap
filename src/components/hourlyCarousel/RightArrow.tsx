import { Button } from "@mui/material";
import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { arrowButtonStyles } from "./buttonStyles";

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)

  return (
    <Button
      variant="contained"
      size="small"
      onClick={() => scrollNext()}
      disabled={isLastItemVisible}
      sx={arrowButtonStyles}
    >
      <ArrowForwardIosIcon />
    </Button>
  );
};

export default RightArrow;
