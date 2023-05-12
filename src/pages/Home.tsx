import React, { useEffect, useRef, useState } from "react";
import {
  Add,
  AddIcCallOutlined,
  ArrowForward,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Fab,
  Fade,
  Grid,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AOS from "aos";
import { useAtom } from "jotai";
import { userAtom } from "../jotais";
import TopNav from "../components/TopNav";
import { getAllEvents, getEvents } from "../apis/event";
import { Event } from "../interfaces/event-api";
import { fetchMe } from "../apis/user";
import EventModal from "../components/EventModal";
import AnimatedNumbers from "react-animated-numbers";
import CreateEventModal from "../components/CreateEventModal";

const mobileWidth = 700;
const nineHundWidth = 900;
const tabletWidth = 1200;

// const mobileMaxWidthMediaQuery = `@media (max-width:${mobileWidth}px)`;
// const nineHundMaxWidthMediaQuery = `@media (max-width:${nineHundWidth}px)`;
// const tabletMaxWidthMediaQuery = `@media (max-width:${tabletWidth}px)`;

const dummy = [
  {
    title: "Hello",
    thumbnail: "public/images/baking.webp",
    content: "what the hell",
    peopleLimitNumber: 3,
    deadline: "2021/03/02",
    holdingDate: "2021/04/02",
  },
  {
    title: "Hello",
    thumbnail: "public/images/Kidari_b.webp",
    content: "what the hell",
    peopleLimitNumber: 3,
    deadline: "2021/03/02",
    holdingDate: "2021/04/02",
  },
  {
    title: "Hello",
    thumbnail: "public/images/baking.webp",
    content: "what the hell",
    peopleLimitNumber: 3,
    deadline: "2021/03/02",
    holdingDate: "2021/04/02",
  },
];

const Home = () => {
  const [events, setEvents] = useState<Event[]>();
  const [user, setUser] = useAtom(userAtom);

  const [showEventModal, setShowEventModal] = useState(false);
  const [showCreateEventModal, setCreateEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const getEvent = await getAllEvents();
        console.log(getEvent);
        setEvents(getEvent);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        setUser(me);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

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
      <EventModal
        onClose={() => setShowEventModal(false)}
        open={showEventModal}
        event={selectedEvent ?? undefined}
      />
      <CreateEventModal
        onClose={() => setCreateEventModal(false)}
        open={showCreateEventModal}
      />
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
          height={450}
          width={"100%"}
          mt={3}
          flexDirection={"column"}
          position={"relative"}
          sx={{ backgroundColor: "white" }}
          borderRadius={"1rem"}
          justifyContent={"flex-end"}
        >
          <img
            src={"/images/coffee.webp"}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 1,
            }}
          />
          <Typography
            color={"black"}
            component="div"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              whiteSpace: "nowrap",
              fontSize: 45,
              fontWeight: 300,
              color: "white",
              zIndex: 999,
              pl: 3,
            }}
          >
            Accumulated Amount: &nbsp;
            <AnimatedNumbers
              animateToNumber={21}
              configs={[
                { mass: 1, tension: 220, friction: 100 },
                { mass: 1, tension: 180, friction: 130 },
                { mass: 1, tension: 280, friction: 90 },
                { mass: 1, tension: 180, friction: 135 },
                { mass: 1, tension: 260, friction: 100 },
                { mass: 1, tension: 210, friction: 180 },
              ]}
            />
            Million
          </Typography>
          <Typography
            color={"black"}
            component="div"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              whiteSpace: "nowrap",
              fontSize: 30,
              fontWeight: 300,
              color: "white",
              zIndex: 999,
              pl: 3,
              pb: 3,
            }}
          >
            Accumulated Givers: &nbsp;
            <AnimatedNumbers
              animateToNumber={31}
              configs={[
                { mass: 1, tension: 220, friction: 100 },
                { mass: 1, tension: 180, friction: 130 },
                { mass: 1, tension: 280, friction: 90 },
                { mass: 1, tension: 180, friction: 135 },
                { mass: 1, tension: 260, friction: 100 },
                { mass: 1, tension: 210, friction: 180 },
              ]}
            />
            K
          </Typography>
          {/* <Box sx={{ position: "absolute", right: 0 }}>
            <img
              src={"public/images/kidari_man-removebg-preview.png"}
              height={400}
            />
          </Box> */}
        </Box>
        <Box
          display={"flex"}
          height={"auto"}
          width={"100%"}
          mt={4}
          flexDirection={"column"}

          // sx={{ backgroundColor: "black" }}
        >
          <Box display={"flex"} width={"100%"}>
            <Typography display={"flex"} fontWeight={400} fontSize={30}>
              Holding Events
            </Typography>
          </Box>
          <Box
            display={"flex"}
            width={"100%"}
            flexWrap={"wrap"}
            mt={4}
            sx={{ overFlowX: "100%" }}
          >
            {events ? (
              events.map((e, idx) => {
                return (
                  <Box
                    display={"flex"}
                    height={400}
                    width={250}
                    flexDirection={"column"}
                    key={`event_${idx}`}
                    mr={2}
                    onClick={() => {
                      setShowEventModal(true);
                      setSelectedEvent(e);
                    }}
                  >
                    <Box
                      display={"flex"}
                      height={200}
                      width={"100%"}
                      sx={{
                        borderRadius: "5px 5px 0 0 ",
                        border: "solid 1px #E5E8EB",
                        borderBottom: 0,
                      }}
                    >
                      <img
                        width={"100%"}
                        src={
                          e.thumbnail
                            ? e.thumbnail
                            : "public/images/baking.webp"
                        }
                        style={{
                          borderRadius: "5px 5px 0 0",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box
                      display={"flex"}
                      height={130}
                      width={"100%"}
                      sx={{
                        borderRadius: "0 0 5px 5px",
                        border: "solid 1px #E5E8EB",
                        borderTop: "",
                        flexDirection: "column",
                        p: 2,
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography display={"flex"}>{e.deadline}</Typography>
                      <Typography
                        display={"flex"}
                        sx={{
                          fontSize: 23,
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "100%",
                        }}
                      >
                        {e.title}
                      </Typography>
                      <Box display={"flex"} justifyContent={"flex-end"}>
                        <Typography display={"flex"} fontSize={13}>
                          ~ {e.deadline}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })
            ) : (
              <></>
            )}
          </Box>
        </Box>
        <Box display={"flex"} height={"auto"} width={"100%"}>
          <Typography fontWeight={400} fontSize={30}>
            Held Events
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width={"100%"}
          flexWrap={"wrap"}
          mt={4}
          sx={{ overFlowX: "100%" }}
        >
          {events ? (
            events.map((e, idx) => {
              return (
                <Box
                  display={"flex"}
                  height={400}
                  width={250}
                  flexDirection={"column"}
                  key={`event_${idx}`}
                  mr={2}
                  onClick={() => {
                    setShowEventModal(true);
                    setSelectedEvent(e);
                  }}
                >
                  <Box
                    display={"flex"}
                    height={200}
                    width={"100%"}
                    sx={{
                      borderRadius: "5px 5px 0 0 ",
                      border: "solid 1px #E5E8EB",
                      borderBottom: 0,
                    }}
                  >
                    <img
                      width={"100%"}
                      src={
                        e.thumbnail ? e.thumbnail : "public/images/baking.webp"
                      }
                      style={{
                        borderRadius: "5px 5px 0 0",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box
                    display={"flex"}
                    height={130}
                    width={"100%"}
                    sx={{
                      borderRadius: "0 0 5px 5px",
                      border: "solid 1px #E5E8EB",
                      borderTop: "",
                      flexDirection: "column",
                      p: 2,
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography display={"flex"}>{e.deadline}</Typography>
                    <Typography
                      display={"flex"}
                      sx={{
                        fontSize: 23,
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                      }}
                    >
                      {e.title}
                    </Typography>
                    <Box display={"flex"} justifyContent={"flex-end"}>
                      <Typography display={"flex"} fontSize={13}>
                        ~ {e.deadline}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })
          ) : (
            <></>
          )}
        </Box>
      </Grid>
      <Box sx={{ position: "fixed", right: 40, bottom: 40 }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setCreateEventModal(true)}
        >
          <Add />
        </Fab>
      </Box>
    </Grid>
  );
};

export default Home;
