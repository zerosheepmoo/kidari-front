import React from "react";
import { Box, CircularProgress, Backdrop } from "@mui/material";

const Bingle: React.FC<{ backdrop?: boolean }> = ({ backdrop = false }) => {
  if (backdrop) {
    return (
      <Backdrop
        open={backdrop}
        sx={{
          zIndex: 1000000,
        }}
      >
        <CircularProgress size={50} />
      </Backdrop>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        zIndex: 1000000,
      }}
    >
      <CircularProgress size={50} />
    </Box>
  );
};

export default Bingle;
