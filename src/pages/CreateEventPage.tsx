import { Box, Grid, Typography } from "@mui/material";
import TopNav from "../components/TopNav";

const CreateEventPage = () => {
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
        <TopNav />
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
