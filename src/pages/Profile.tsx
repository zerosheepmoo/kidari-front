import { useAtom } from "jotai";
import { userAtom } from "../jotais";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import TopNav from "../components/TopNav";
import { fetchMe } from "../apis/user";
import EditProfileModal from "../components/EditProfileModal";
import { JoinLeftSharp } from "@mui/icons-material";

const Profile = () => {
  const [user, setUser] = useAtom(userAtom);
  const [showEditModal, setShowEditModal] = useState(false);
  const navi = useNavigate();

  const stars: any = [];
  //   Im sorry Moo

  useEffect(() => {
    (async () => {
      try {
        const u = await fetchMe();
        if (u) {
          setUser(u);
          console.log(u);
        } else {
          navi("/login");
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const getStars = () => {
    if (user) {
      let abx = user.rating!;
      for (let i = 0; i < 5; i++) {
        if (user.rating! === 0) {
          stars.push(<img src={"icons/star_g.svg"} />);
          stars.push(<img src={"icons/star_g.svg"} />);
          stars.push(<img src={"icons/star_g.svg"} />);
          stars.push(<img src={"icons/star_g.svg"} />);
          stars.push(<img src={"icons/star_g.svg"} />);
          break;
        } else if (abx > 0 && abx < 1) {
          stars.push(<img src={"icons/star_h.svg"} />);
          abx -= 0.5;
        } else if (abx === 0) {
          stars.push(<img src={"icons/star_g.svg"} />);
        } else {
          stars.push(<img src={"icons/star_f.svg"} />);
          abx -= 1;
        }
      }
    }
    return stars;
  };

  return (
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
      <EditProfileModal
        onClose={() => setShowEditModal(false)}
        open={showEditModal}
      />
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
        <TopNav />
        <Grid
          display={"flex"}
          width={"100%"}
          height={250}
          sx={{ flexDirection: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          mt={2}
        >
          <Box
            display={"flex"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"70%"}
            border={"solid 1px #E5E8EB"}
            borderRadius={"1rem"}
            p={10}
          >
            <Box display={"flex"}>
              <Box
                display={"flex"}
                sx={{
                  border: "solid 1px #A9A9A9",
                  borderRadius: "5rem",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <img
                  src={
                    user
                      ? "public/icons/profile_d.png"
                      : "public/icons/profile_d.png"
                  }
                  style={{ width: 100, height: 100 }}
                />
              </Box>
              <Box display={"flex"} flexDirection={"column"} pl={5}>
                <Box
                  display={"flex"}
                  color="black"
                  height={"100%"}
                  sx={{ alignItems: "flex-end", justifyContent: "flex-start" }}
                >
                  <Typography fontSize={20} color={"black"}>
                    {user ? (user.type == 1 ? "Learner" : "") : ""}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  color="black"
                  height={"100%"}
                  sx={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography fontSize={25} color={"black"} fontWeight={800}>
                    {user ? user.name : ""}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  color="black"
                  height={"100%"}
                  sx={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  {getStars()}
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Button
                variant="contained"
                sx={{ m: 1 }}
                onClick={() => setShowEditModal(true)}
              >
                <Typography variant="f18B">Edit Profile</Typography>
              </Button>
              <Button variant="contained" sx={{ m: 1 }}>
                <Typography variant="f18B">Verify</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid display={"flex"} width={"70vw"} mt={10} justifyContent={"center"}>
          <Box
            display={"flex"}
            height={"100%"}
            alignItems={"center"}
            width={"70%"}
            borderRadius={"1rem"}
          >
            <Typography display={"flex"} fontSize={23} fontWeight={700}>
              Requested Experience
            </Typography>
            <Typography
              color={"#7149C6"}
              display={"flex"}
              fontSize={23}
              fontWeight={700}
            >
              &nbsp; {user ? user.rating : "0"}
            </Typography>
          </Box>
        </Grid>
        <Grid display={"flex"} width={"70vw"} mt={10} justifyContent={"center"}>
          <Box
            display={"flex"}
            height={400}
            alignItems={"center"}
            width={"70%"}
            borderRadius={"1rem"}
          >
            <Typography display={"flex"} fontSize={23} fontWeight={700}>
              Requested Experience
            </Typography>
          </Box>
        </Grid>
        <Grid
          display={"flex"}
          width={"100%"}
          height={250}
          sx={{ flexDirection: "column" }}
          justifyContent={"center"}
          alignItems={"center"}
          mt={2}
          position={"relative"}
        >
          <Box display={"flex"}></Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Profile;
