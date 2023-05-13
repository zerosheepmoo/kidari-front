import React from "react";
import { Box, CircularProgress, Link } from "@mui/material";
import { useAtomValue } from "jotai";
import { userAtom, userLoggedInCheckedAtom } from "../jotais";
import { useLocation } from "react-router-dom";

const NavActionButton: React.FC<{
  link: string;
  isUserTab?: boolean;
  label?: string;
}> = ({ link, isUserTab = false, label }) => {
  const user = useAtomValue(userAtom);
  const hasLoggedIn = useAtomValue(userLoggedInCheckedAtom);

  if (!hasLoggedIn && isUserTab) {
    return (
      <Box
        display={"flex"}
        sx={{
          width: 40,
          height: 40,
          border: "solid 1px #A9A9A9",
          borderRadius: "2rem",
          justifyContent: "center",
          alignItems: "center",
          mx: 2,
        }}
      >
        <CircularProgress size={30} />
      </Box>
    );
  }
  return (
    <Box
      component={Link}
      href={isUserTab && hasLoggedIn && user ? "/profile" : link}
      mx={2}
      fontSize="subtitle1.fontSize"
      sx={{
        textDecoration: "none",
        color: "black",
      }}
    >
      {isUserTab && user ? (
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
          <img src={"/icons/profile_d.png"} style={{ width: 30, height: 30 }} />
        </Box>
      ) : (
        label
      )}
    </Box>
  );
};

const TopNav = () => {
  const loca = useLocation();

  if (loca.pathname === "/") {
    return <></>;
  }

  return (
    <>
      <Box
        position={"fixed"}
        display={"flex"}
        justifyContent="center"
        p={2}
        pl={0}
        pr={0}
        width={"100%"}
        alignSelf={"center"}
        height={80}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "70vw",
          }}
        >
          <Box color="white" component={Link} href={"/home"}>
            <img
              src={"/images/kidari_b.webp"}
              style={{
                height: 40,
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" justifyContent={"flex-end"}>
            <NavActionButton label="Home" link="/home" />
            <NavActionButton label="About" link="/about" />
            <NavActionButton label="Login" link="/login" isUserTab />
          </Box>
        </Box>
      </Box>
      {/* // for layout */}
      <Box width={"100%"} height={80} />
    </>
  );
};

export default TopNav;
