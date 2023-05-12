import React, { useEffect, useState } from "react";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Box, Button, Fade, Grid, TextField, Typography } from "@mui/material";
import TopNav from "../components/TopNav";
import { fetchMe, userSignIn } from "../apis/user";
import { userAtom } from "../jotais";
import { useAtom } from "jotai";
import CreateAccountModal from "../components/CreateAccountModal";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navi = useNavigate();
  //  user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_user, setUser] = useAtom(userAtom);

  const [error, setError] = useState<string | undefined>(undefined);

  // This fetches based on cookie and auto logs in if there has been
  useEffect(() => {
    (async () => {
      try {
        const u = await fetchMe();
        if (u) {
          setUser(u);
          navi("/home");
        } else {
          console.log("User login"), u;
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  // modal
  const [showModal, setShowModal] = useState(false);

  // This takes email and password receives cookie
  const handleLogin = async () => {
    if (!(email && password)) return;
    try {
      const user = await userSignIn({ email: email, password: password });
      if (user) {
        console.log("logged in!");
        setUser(user);
        navi("/home");
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
        height: "100vh",
        flexDirection: "column",
      }}
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
                  <Typography sx={{ pr: 1 }}>Are you new ?</Typography>
                  <Typography
                    sx={{ textDecoration: "underline" }}
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
