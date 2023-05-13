import React, { useEffect, useState } from "react";
import { Box, Button, Fade, Grid, TextField, Typography } from "@mui/material";
import { userSignIn } from "../apis/user";
import { userAtom, userLoggedInCheckedAtom } from "../jotais";
import { useAtom, useAtomValue } from "jotai";
import CreateAccountModal from "../components/CreateAccountModal";
import { useNavigate } from "react-router-dom";
import Bingle from "../components/Bingle";

const Login = () => {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useAtom(userAtom);
  const hasUserLoggedIn = useAtomValue(userLoggedInCheckedAtom);
  const [showModal, setShowModal] = useState(false);

  const [error, setError] = useState<string | undefined>(undefined);

  // NOTE: if there is no user info, then redirect to login page
  useEffect(() => {
    (async () => {
      if (!hasUserLoggedIn || !user) return;
      navi("/home");
    })();
    // turn off lint for navi
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, hasUserLoggedIn]);

  if (!hasUserLoggedIn) {
    return <Bingle />;
  }

  // This takes email and password receives cookie
  const handleLogin = async () => {
    if (!(email && password)) return;
    try {
      const user = await userSignIn({ email: email, password: password });
      if (user) {
        console.log("logged in!");
        setUser(() => user);
      }
    } catch (e) {
      console.log(e);
      setError("Invalid Login");
    }
  };

  return (
    <Grid
      container
      position={"relative"}
      sx={{
        width: "100vw",
        height: "100%",
        flexDirection: "column",
        overflowY: "hidden",
        justifyContent: "center",
      }}
      mt={10}
    >
      {/* Create account modal section */}
      <CreateAccountModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
      <Grid
        item
        display={"flex"}
        width={"70vw"}
        alignSelf={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        height={"100%"}
      >
        {/* Login Modal*/}
        <Grid
          item
          display={"flex"}
          sx={{
            width: "100%",
            height: "100%",
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
            {/* Fade Animation of the image */}
            <Fade in timeout={3000}>
              <Box
                display={"flex"}
                width={"50%"}
                position={"relative"}
                data-aos="fade-left"
              >
                <img
                  src={"/images/baking.webp"}
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
            {/* Login Section */}
            <Box display={"flex"} width={"50%"} flexDirection={"column"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                width={"100%"}
                pt={11}
                pb={9}
              >
                <img
                  src={"/images/kidari_b.webp"}
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
                  <Typography>Email</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                  <TextField
                    sx={{ width: "100%" }}
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                    onClick={() => handleLogin()}
                  >
                    Login
                  </Button>
                </Box>
                {/* Creates new account, opening create new account modal */}
                <Box
                  display={"flex"}
                  sx={{ width: "100%", p: 2 }}
                  justifyContent={"center"}
                >
                  <Typography
                    sx={{ pr: 1, whiteSpace: "nowrap", cursor: "pointer" }}
                  >
                    Are you new ?
                  </Typography>
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowModal(true)}
                  >
                    Create new account
                  </Typography>
                </Box>
                {/* Error shows when login does not work */}
                <Box
                  display={"flex"}
                  sx={{ width: "100%", p: 2 }}
                  justifyContent={"center"}
                >
                  <Typography sx={{ pr: 1, color: "red" }}>
                    {error ?? undefined}
                  </Typography>
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
