import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { userAtom, userLoggedInCheckedAtom } from "../jotais";
import Bingle from "../components/Bingle";

const CreateEventPage = () => {
  const user = useAtomValue(userAtom);
  const hasUserLoggedIn = useAtomValue(userLoggedInCheckedAtom);
  const navi = useNavigate();
  // NOTE: if there is no user info, then redirect to login page
  useEffect(() => {
    (async () => {
      if (!hasUserLoggedIn || user) return;
      navi("/login");
    })();
    // turn off lint for navi
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasUserLoggedIn, user]);

  if (!hasUserLoggedIn) {
    return <Bingle />;
  }
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100%",
        flexDirection: "column",
        overFlowY: "scroll",
      }}
    >
      <Grid
        item
        display={"flex"}
        width={"70vw"}
        alignSelf={"center"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
        height={"100%"}
      >
        <Box
          display={"flex"}
          height={300}
          width={"100%"}
          mt={4}
          // sx={{ backgroundColor: "black" }}
        >
          <Typography fontWeight={400} fontSize={30}>
            Best Reviews
          </Typography>
        </Box>
        <Box display={"flex"} height={2000} width={"100%"}>
          <Typography fontWeight={400} fontSize={30}>
            Story
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default CreateEventPage;
