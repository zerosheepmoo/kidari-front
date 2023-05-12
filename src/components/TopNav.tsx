import { Box, Grid, Link } from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { currentTabAtom, userAtom } from "../jotais";

const TopNav = () => {
  const [currentIdx, setCurrentIdx] = useAtom(currentTabAtom);
  const [user, setUser] = useAtom(userAtom);
  const nav = [
    { label: "Home", link: "/home" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Login", link: "/login" },
  ];

  return (
    <Grid
      item
      display={"flex"}
      justifyContent="space-between"
      p={2}
      pl={0}
      pr={0}
      width={"100%"}
      alignSelf={"center"}
      height={80}
    >
      <Box color="white" component={Link} href={"/home"}>
        <img
          src={"public/images/kidari_b.webp"}
          style={{
            height: 40,
          }}
        />
      </Box>
      <Box display="flex" alignItems="center" justifyContent={"flex-end"}>
        {nav.map((e, idx) => {
          return (
            <Box
              component={Link}
              href={user && idx !== 3 ? e.link : "/profile"}
              mx={2}
              fontSize="subtitle1.fontSize"
              key={`nav_${idx}`}
              sx={{
                textDecoration: "none",
                color: "black",
                borderBottom:
                  currentIdx === idx && idx !== 3 ? "solid 2px" : "none",
              }}
            >
              {user && idx === 3 ? (
                <Box
                  display={"flex"}
                  sx={{
                    width: 40,
                    height: 40,
                    border: "solid 1px #A9A9A9",
                    borderRadius: "2rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={"public/icons/profile_d.png"}
                    style={{ width: 30, height: 30 }}
                  />
                </Box>
              ) : (
                e.label
              )}
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
};

export default TopNav;
