import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { userAtom, userLoggedInCheckedAtom } from "../jotais";
import EditProfileModal from "../components/EditProfileModal";
import { useNavigate } from "react-router-dom";
import Bingle from "../components/Bingle";
import { getEvents } from "../apis/event";
import { EventProcess } from "../consts/event-const";
import { Event } from "../interfaces/event-api";
import EventCard from "../components/EventCard";
import { UserType } from "../consts/user-const";
import EventModal from "../components/EventModal";
import MyEventModal from "../components/MyEventModal";

const Profile = () => {
  const user = useAtomValue(userAtom);
  const hasUserLoggedIn = useAtomValue(userLoggedInCheckedAtom);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const navi = useNavigate();
  const [draftEvs, setDraftEvs] = useState<Event[]>([]);
  const [requestEvs, setRequestedEvs] = useState<Event[]>([]);
  const [finishedEvs, setFinishededEvs] = useState<Event[]>([]);

  const [selectedEvent, setSelectedEvent] = useState<Event>();

  useEffect(() => {
    if (!user) return;
    (async () => {
      const evs = await getEvents(user._id);
      setRequestedEvs(evs.filter((ev) => ev.process === EventProcess.WIP));
      setFinishededEvs(evs.filter((ev) => ev.process === EventProcess.DONE));
      setDraftEvs(evs);
    })();
  }, [user]);

  // NOTE: if there is no user info, then redirect to login page

  useEffect(() => {
    (async () => {
      if (!hasUserLoggedIn || user) return;
      navi("/login");
    })();
    // turn off lint for navi
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasUserLoggedIn, user]);

  const stars: React.ReactNode[] = [];

  //   This gets the rating of the user and then provides image of the rating based on it
  const getStars = () => {
    if (user) {
      let abx = user.rating;
      abx = Math.ceil(abx) - 0.5;
      for (let i = 0; i < 5; i++) {
        if (user.rating === 0) {
          stars.push(<img src={"icons/star_g.svg"} key={`star-0`} />);
          stars.push(<img src={"icons/star_g.svg"} key={`star-1`} />);
          stars.push(<img src={"icons/star_g.svg"} key={`star-2`} />);
          stars.push(<img src={"icons/star_g.svg"} key={`star-3`} />);
          stars.push(<img src={"icons/star_g.svg"} key={`star-4`} />);
          break;
        } else if (abx > 0 && abx < 1) {
          stars.push(<img src={"icons/star_h.svg"} key={`star-${i}`} />);
          abx -= 0.5;
        } else if (abx === 0) {
          stars.push(<img src={"icons/star_g.svg"} key={`star-${i}`} />);
        } else {
          stars.push(<img src={"icons/star_f.svg"} key={`star-${i}`} />);
          abx -= 1;
        }
      }
    }
    return stars;
  };

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
        overflowX: "hidden",
      }}
    >
      {/* Edit Profile Modal Section */}
      <EditProfileModal
        onClose={() => setShowEditModal(false)}
        open={showEditModal}
      />
      <MyEventModal
        onClose={() => setShowEventModal(false)}
        open={showEventModal}
        OID={selectedEvent ? selectedEvent._id : ""}
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
        {/* Top Nav Section */}
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
                  src={user ? "/icons/profile_d.png" : "/icons/profile_d.png"}
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
                    {user ? (user.type == 1 ? "Learner" : "Giver") : ""}
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
                  <Typography
                    color={"#7149C6"}
                    display={"flex"}
                    fontSize={23}
                    fontWeight={700}
                  >
                    &nbsp; {user ? user.rating : "0"}
                  </Typography>
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
        {user?.type === UserType.GIVER && (
          <Box width={"70vw"} mt={10}>
            <Box
              display={"flex"}
              height={"100%"}
              alignItems={"center"}
              borderRadius={"1rem"}
            >
              <Typography display={"flex"} fontSize={23} fontWeight={700}>
                My Event
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                overflowX: "auto",
                flexShrink: 0,
              }}
            >
              {draftEvs.map((ev, idx) => {
                return (
                  <EventCard
                    onClick={() => {
                      setSelectedEvent(ev);
                      setShowEventModal(true);
                    }}
                    {...ev}
                    key={`rev-${idx}`}
                  />
                );
              })}
            </Box>
          </Box>
        )}
        <Box width={"70vw"} mt={10}>
          <Box
            display={"flex"}
            height={"100%"}
            alignItems={"center"}
            borderRadius={"1rem"}
          >
            <Typography display={"flex"} fontSize={23} fontWeight={700}>
              Requested Events
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              overflowX: "auto",
              flexShrink: 0,
            }}
          >
            {requestEvs.map((ev, idx) => {
              return <EventCard {...ev} key={`rev-${idx}`} />;
            })}
          </Box>
        </Box>
        <Box width={"70vw"} mt={10}>
          <Box
            display={"flex"}
            height={"100%"}
            alignItems={"center"}
            borderRadius={"1rem"}
          >
            <Typography display={"flex"} fontSize={23} fontWeight={700}>
              Participated Events
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              overflowX: "auto",
              flexShrink: 0,
            }}
          >
            {finishedEvs.map((ev, idx) => {
              return <EventCard {...ev} key={`rev-${idx}`} />;
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Profile;
