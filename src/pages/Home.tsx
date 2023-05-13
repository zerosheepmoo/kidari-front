import React, { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Fab, Grid, Typography } from "@mui/material";
import AOS from "aos";
import { useAtomValue } from "jotai";
import { userAtom, userLoggedInCheckedAtom } from "../jotais";
import { getAllEvents } from "../apis/event";
import { Event } from "../interfaces/event-api";
import EventModal from "../components/EventModal";
import AnimatedNumbers from "react-animated-numbers";
import CreateEventModal from "../components/CreateEventModal";
import { useNavigate } from "react-router-dom";
import Bingle from "../components/Bingle";
import { EventProcess } from "../consts/event-const";
import EventCard from "../components/EventCard";

const Home = () => {
  const [events, setEvents] = useState<Event[]>();
  const user = useAtomValue(userAtom);
  const hasUserLoggedIn = useAtomValue(userLoggedInCheckedAtom);
  const navi = useNavigate();

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

  // NOTE: if there is no user info, then redirect to login page
  useEffect(() => {
    (async () => {
      if (!hasUserLoggedIn || user) return;
      navi("/login");
    })();
    // turn off lint for navi
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasUserLoggedIn, user]);

  useEffect(() => {
    AOS.init();
  }, []);

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
      {/* Event Modal That shows descriptions of the event */}
      <EventModal
        user={user ? user : undefined}
        onClose={() => setShowEventModal(false)}
        open={showEventModal}
        event={selectedEvent ?? undefined}
      />
      {/* Create Event Modal that shows the input textfields */}
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
        {/* Banner that shows the accumulated amount with animated Numbers */}
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
        </Box>
        {/* Start of Upcoming Events Section */}
        <Box
          display={"flex"}
          height={"auto"}
          width={"100%"}
          mt={4}
          flexDirection={"column"}
        >
          <Box display={"flex"} width={"100%"}>
            <Typography display={"flex"} fontWeight={400} fontSize={30}>
              Upcoming Events
            </Typography>
          </Box>
          <Box
            display={"flex"}
            width={"100%"}
            mt={4}
            sx={{ overflowX: "auto" }}
          >
            {events
              ?.filter((ev) => ev.process === EventProcess.WIP)
              .reverse()
              .map((e, idx) => {
                return (
                  <EventCard
                    key={`event_${idx}`}
                    onClick={() => {
                      setShowEventModal(true);
                      setSelectedEvent(e);
                    }}
                    {...e}
                  />
                );
              })}
          </Box>
        </Box>
        {/* Held Event Section */}
        <Box display={"flex"} height={"auto"} width={"100%"}>
          <Typography fontWeight={400} fontSize={30}>
            Held Events
          </Typography>
        </Box>
        <Box display={"flex"} width={"100%"} mt={4} sx={{ overflowX: "auto" }}>
          {events ? (
            // filtered events with process type DONE
            events
              .filter((ev) => ev.process === EventProcess.DONE)
              .map((e, idx) => {
                return (
                  <EventCard
                    key={`event_${idx}`}
                    onClick={() => {
                      setShowEventModal(true);
                      setSelectedEvent(e);
                    }}
                    {...e}
                  />
                );
              })
          ) : (
            <></>
          )}
        </Box>
      </Grid>
      {/* Fab button that opens create event modal */}
      {user ? (
        user.type === 1 ? (
          <></>
        ) : (
          <Box sx={{ position: "fixed", right: 40, bottom: 40 }}>
            <Fab
              color="primary"
              aria-label="add"
              onClick={() => {
                setCreateEventModal(true);
              }}
            >
              <Add />
            </Fab>
          </Box>
        )
      ) : (
        <Box sx={{ position: "fixed", right: 40, bottom: 40 }}>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              setCreateEventModal(true);
            }}
          >
            <Add />
          </Fab>
        </Box>
      )}
    </Grid>
  );
};

export default Home;
