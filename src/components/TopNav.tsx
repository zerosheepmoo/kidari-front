import { Box, Grid, Link } from "@mui/material";
import React from "react";

const TopNav = () => {
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
      width={"100%"}
      alignSelf={"center"}
      height={80}
    >
      <Box color="white">
        <img
          src={"public/images/kidari_b.webp"}
          style={{
            height: 40,
          }}
        />
      </Box>
      <Box display="flex" alignItems="center">
        {nav.map((e, idx) => {
          return (
            <Box
              component={Link}
              href={e.link}
              mx={2}
              fontSize="subtitle1.fontSize"
              key={`nav_${idx}`}
              sx={{ textDecoration: "none", color: "black" }}
            >
              {e.label}
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
};

export default TopNav;