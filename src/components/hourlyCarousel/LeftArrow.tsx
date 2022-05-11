import { Button } from "@mui/material";
import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { arrowButtonStyles } from "./buttonStyles";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)

  return (
    <Button
      variant="contained"
      size="small"
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      sx={arrowButtonStyles}
    >
      <ArrowBackIosNewIcon />
    </Button>
  );
};

export default LeftArrow;
