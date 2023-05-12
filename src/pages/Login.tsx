import React from "react";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Box, Button, Fade, Grid, Typography } from "@mui/material";

const Login = () => {
  return (
    <Grid
      position={"relative"}
      sx={{
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Top Nav */}
      <Grid
        justifyContent="center"
        p={2}
        borderBottom={"solid 1px #EDF1F3"}
        width={"80vw"}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box color="white">
            <img
              src={"public/images/kidari_b.png"}
              style={{
                width: 60,
              }}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Box mx={2} fontSize="subtitle1.fontSize">
              Home
            </Box>
            <Box mx={2} fontSize="subtitle1.fontSize">
              About
            </Box>
            <Box
              mx={2}
              fontSize="subtitle1.fontSize"
              fontWeight="fontWeightMedium"
            >
              Contact
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid display={"flex"}>
        <Box>hello</Box>
      </Grid>
    </Grid>
  );
};

export default Login;
