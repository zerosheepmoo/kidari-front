import { Box, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    // This is a static page that introduces our idea. I believe not much algorithm is used here for me to comment
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100%",
        flexDirection: "column",
        overFlowY: "scroll",
        overflowX: "hidden",
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
        position={"relative"}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"100%"}
          height={"100%"}
          pt={10}
        >
          <Box display={"flex"} width={"50%"}>
            <img
              width={"100%"}
              src={"/images/about.png"}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            display={"flex"}
            sx={{ flexDirection: "column", width: "50%", p: 5 }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: 30 }}>
              Fuel the Fire of Youth Potential !
            </Typography>
            <Typography>
              Still not sure what you want to be? ‘Kidari’ is the place where
              you can experience the real world.
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 30, pt: 3 }}>
              Our Mission
            </Typography>
            <Typography>
              ‘Kidari’ has been on a mission to help teenagers search for their
              future career. Today, over 100,000 teenagers and 10,000 givers
              have used our service. The ‘Kidari’ platform enables anyone to
              improve the Korean Education!
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"100%"}
          height={"100%"}
          sx={{ backgroundColor: "#E8E8E8" }}
          mt={10}
        >
          <Box
            display={"flex"}
            width={"100%"}
            height={150}
            flexDirection={"row"}
            justifyContent={"space-between"}
            p={5}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box display={"flex"}>
                <Typography
                  textAlign={"center"}
                  color={"#7149C6"}
                  fontSize={50}
                  fontWeight={800}
                >
                  4
                </Typography>
              </Box>
              <Box display={"flex"}>Employees</Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box display={"flex"}>
                <Typography
                  textAlign={"center"}
                  color={"#7149C6"}
                  fontSize={50}
                  fontWeight={800}
                >
                  14
                </Typography>
              </Box>
              <Box display={"flex"}>Employees</Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box display={"flex"}>
                <Typography
                  textAlign={"center"}
                  color={"#7149C6"}
                  fontSize={50}
                  fontWeight={800}
                >
                  2023
                </Typography>
              </Box>
              <Box display={"flex"}>Founded in Incheon </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box display={"flex"}>
                <Typography
                  textAlign={"center"}
                  color={"#7149C6"}
                  fontSize={50}
                  fontWeight={800}
                >
                  10K+
                </Typography>
              </Box>
              <Box display={"flex"}>Givers</Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default About;
