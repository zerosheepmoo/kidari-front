import React, { useState } from "react";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Box, Button, Fade, Grid, TextField, Typography } from "@mui/material";
import TopNav from "../components/TopNav";
import { userSignIn } from "../apis/user";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [createAccount, setCreateAccount] = useState(false);

  const handleLogin = async () => {
    // const user = await userSignIn({ email: email, password: password });
  };

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
                  src={"public/images/kidari_b.webp"}
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
                      backgroundColor: "#7149C6",
                      width: "100%",
                      color: "white",
                      mt: 4,
                      "&:hover": {
                        backgroundColor: "#7149C6",
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
