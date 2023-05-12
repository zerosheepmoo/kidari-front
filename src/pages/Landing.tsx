import React, { useEffect, useState } from "react";
import { Box, Button, Fade, Typography } from "@mui/material";
import AOS from "aos";

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      position={"relative"}
      sx={{ overflowX: "hidden", overflowY: "hidden" }}
    >
      <Box position={"relative"}>
        {/* Background Image */}
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
          {/* Fade animation that triggers logo */}
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
          {/* Button Section that leads to the login path */}
          <Fade in timeout={1000} style={{ transitionDelay: "500ms" }}>
            <Button
              variant="contained"
              sx={{ width: "fit-content", p: 3, mt: 7 }}
              href={"/login"}
            >
              <Typography variant="f18B">Request & Support Here</Typography>
            </Button>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
