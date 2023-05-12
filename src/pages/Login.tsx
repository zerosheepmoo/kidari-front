import React from "react";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Box, Button, Fade, Grid, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Grid
      container
      position={"relative"}
      sx={{
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Grid
        item
        display={"flex"}
        width={"70vw"}
        alignSelf={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        height={"100%"}
      >
        {/* Top Nav */}
        <Grid
          item
          display={"flex"}
          justifyContent="space-between"
          p={2}
          width={"100%"}
          alignSelf={"center"}
          height={80}
        >
          <Box color="white">
            <img
              src={"public/images/kidari_b.png"}
              style={{
                height: 40,
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
            <Box mx={2} fontSize="subtitle1.fontSize">
              Login
            </Box>
          </Box>
        </Grid>
        {/* Login Modal*/}
        <Grid
          item
          display={"flex"}
          sx={{
            width: "100%",
            height: "100%",
            // backgroundColor: "red",
            alignItems: "center",
          }}
        >
          <Box
            display={"flex"}
            sx={{
              width: "100%",
              height: "70%",
              backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Fade in timeout={3000}>
              <Box
                display={"flex"}
                width={"50%"}
                position={"relative"}
                data-aos="fade-left"
              >
                <img
                  src={"public/images/baking.webp"}
                  style={{
                    alignSelf: "center",
                    width: "90%",
                    height: "90%",
                    objectFit: "cover",
                    borderRadius: 30,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)",
                  }}
                ></Box>
              </Box>
            </Fade>
            <Box display={"flex"} width={"50%"} flexDirection={"column"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                width={"100%"}
                pt={11}
                pb={9}
              >
                <img
                  src={"public/images/kidari_b.png"}
                  style={{
                    height: 100,
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                width={"50%"}
                alignSelf={"center"}
              >
                <Box display={"flex"} width={"100%"}>
                  <Typography>ID</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                  <TextField
                    sx={{ width: "100%" }}
                    autoComplete="current-password"
                  />
                </Box>
                <Box display={"flex"} width={"100%"} pt={1}>
                  <Typography>Password</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                  <TextField
                    sx={{ width: "100%" }}
                    type="password"
                    autoComplete="current-password"
                  />
                </Box>
                <Box
                  display={"flex"}
                  sx={{ width: "100%" }}
                  justifyContent={"center"}
                >
                  <Button
                    sx={{
                      height: 50,
                      backgroundColor: "#FFDEB9",
                      width: "100%",
                      color: "black",
                      mt: 4,
                      "&:hover": {
                        backgroundColor: "#FFDEB9",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
