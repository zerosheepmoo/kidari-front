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

const Landing = () => {
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
      <Box position={"relative"}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "#111",
          }}
        >
          <img
            src={"public/images/baking.webp"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.3,
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fade in timeout={2000}>
            <img
              src={"public/images/Kidari_w.webp"}
              style={{
                height: 300,
                objectFit: "cover",
              }}
            />
          </Fade>
          <Fade in timeout={3000}>
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFF",
                fontSize: 23,
                pt: 3,
              }}
            >
              {"Ask for help, because together we can"}
            </Typography>
          </Fade>
          <Fade in timeout={1000} style={{ transitionDelay: "500ms" }}>
            <Button
              variant="contained"
              sx={{ width: "fit-content", p: 3, mt: 7 }}
              href={"/login"}
            >
              <Typography variant="f18B">Apply / Agent Here</Typography>
            </Button>
          </Fade>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 100,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="f14B" color={"#FFF"}>
            See more
          </Typography>
          <KeyboardDoubleArrowDown
            htmlColor="#FFF"
            sx={{
              animation: "bounce 3s infinite",
              MozAnimation: "bounce 3s infinite",
              WebkitAnimation: "bounce 3s infinite",
              "@keyframes bounce": {
                "0%, 10%, 30%, 50%, 100%": {
                  transform: "translateY(0)",
                },
                "20%": {
                  transform: "translateY(5px)",
                },
                "40%": {
                  transform: "translateY(3px)",
                  opacity: 0.5,
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
