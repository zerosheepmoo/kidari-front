import React, { useEffect, useRef, useState } from "react";
import { ArrowForward, KeyboardDoubleArrowDown } from "@mui/icons-material";
import {
  Box,
  Button,
  Fade,
  Grid,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AOS from "aos";
import RatioBox from "../components/RatioBox";
import LogoSlide from "../components/LogoSlide";

import { useScroll, animated } from "@react-spring/web";
import { useSearchParams } from "react-router-dom";

const mobileWidth = 700;
const nineHundWidth = 900;
const tabletWidth = 1200;

// const mobileMaxWidthMediaQuery = `@media (max-width:${mobileWidth}px)`;
// const nineHundMaxWidthMediaQuery = `@media (max-width:${nineHundWidth}px)`;
// const tabletMaxWidthMediaQuery = `@media (max-width:${tabletWidth}px)`;

enum FontWeightValues {
  THIN = 100,
  EXTRA_LIGHT = 200,
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  SEMI_BOLD = 600,
  BOLD = 700,
  EXTRA_BOLD = 800,
  BLACK = 900,
  EXTAR_BLACK = 950,
}

const Home = () => {
  const [showBottomButton, setShowBottomButton] = useState(false);
  const [searchParams, _setSearchParams] = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 72) {
        setShowBottomButton(true);
      } else {
        setShowBottomButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box position={"relative"} sx={{ overflowX: "hidden" }}>
      
    </Box>
  );
};

export default Home;
