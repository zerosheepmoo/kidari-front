import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import BasicModal from "./BasicModal";
import { useNavigate } from "react-router-dom";
import { Event } from "../interfaces/event-api";
import { toast } from "react-hot-toast";
import { UserType } from "../consts/user-const";
import { getEventComments, postEventComment } from "../apis/event-comment";
import { EventComment } from "../interfaces/event-comment-api";
import { User } from "../interfaces/user-api";
import { registerEvent } from "../apis/event";
import { EventProcess } from "../consts/event-const";

export interface EventModalProps {
  open: boolean;
  onClose: () => void;
  event: Event | undefined;
  user: User | undefined;
}

const EventModal: React.FC<EventModalProps> = ({
  open,
  onClose,
  event,
  user,
}) => {
  const [comments, setComments] = useState<EventComment[]>([]);
  const [comment, setComment] = useState("");

  const [canComment, setCanComment] = useState(false);
  const navi = useNavigate();

  const isWIP = event?.process === EventProcess.WIP;

  useEffect(() => {
    (async () => {
      if (event) {
        try {
          const x = await getEventComments(event._id);
          if (x) {
            setComments(x);
            console.log(x);
            if (checkValidForComment()) {
              setCanComment(true);
            }
          } else {
            console.log("none");
          }
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, [event]);

  const handleSendComment = async () => {
    if (!(event && user)) return;
    try {
      const x = await postEventComment(event._id, { content: comment });
      toast.success("You have sucessfully commented");
      setTimeout(() => {
        navi("/profile");
      }, 1000);
      onClose();
    } catch (e) {
      console.log(e);
    }
  };

  const handleRequest = async () => {
    if (!(user && event)) return;
    try {
      const x = await registerEvent(event._id);
      console.log("Request Sent", x);
    } catch (e) {
      console.log(e);
    }
    toast.success("You have sucessfully requested");
    onClose();
  };

  const checkValidForComment = () => {
    console.log("insode");
    if (event?.process === EventProcess.DONE && user) {
      const x = event.registered.includes(user._id);
      console.log(event.registered, x);
      return x;
    }
    return false;
  };

  return (
    <BasicModal
      open={open}
      PaperProps={{ sx: { borderRadius: 0 } }}
      onClose={onClose}
      title={event ? event.title : ""}
    >
      <Box
        display={"flex"}
        height={500}
        width={"100%"}
        sx={{
          borderRadius: "5px 5px 0 0 ",
          border: "solid 1px #E5E8EB",
          borderBottom: 0,
        }}
      >
        <img
          width={"100%"}
          height={"100%"}
          src={event ? event.thumbnail : "/images/baking.webp"}
          style={{
            borderRadius: "5px 5px 0 0",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box display={"flex"} pt={5}>
        {event ? event.content : ""}
      </Box>
      <Box
        display={"flex"}
        fontWeight={800}
        mt={1}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Typography fontWeight={700}>
          Deadline : {event ? event.holdingDate : ""}
        </Typography>
        <Typography fontSize={20} fontWeight={800} color={"#7149C6"}>
          {event ? Number(event.feeForPerson).toLocaleString() : "0"} Won
        </Typography>
      </Box>
      <Grid
        display={"flex"}
        width={"100%"}
        height={100}
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
          width={"100%"}
          border={"solid 1px #E5E8EB"}
          borderRadius={2}
          flexDirection={"row"}
          p={3}
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
                src={event ? "/icons/profile_d.png" : "/icons/profile_d.png"}
                style={{ width: 30, height: 30 }}
              />
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} pl={5}>
            <Box
              display={"flex"}
              color="black"
              height={"100%"}
              sx={{ alignItems: "flex-end", justifyContent: "flex-end" }}
            >
              <Typography fontSize={15} color={"black"}>
                Registered {event ? event.registeredPeopleNumber : ""}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              color="black"
              height={"100%"}
              sx={{ alignItems: "flex-end", justifyContent: "flex-end" }}
            >
              <Typography fontSize={15} color={"black"}>
                Limit {event ? event.peopleLimitNumber : ""}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Box display={"flex"}>
        <Typography fontWeight={700} pt={2}>
          Comments
        </Typography>
      </Box>
      {comments ? (
        comments.map((e, idx) => {
          return (
            <Grid
              display={"flex"}
              width={"100%"}
              height={"auto"}
              sx={{ flexDirection: "row" }}
              justifyContent={"center"}
              alignItems={"center"}
              mt={2}
              key={`event_held_${idx}`}
            >
              <Box
                display={"flex"}
                height={"100%"}
                alignItems={"center"}
                width={"100%"}
                border={"solid 1px #E5E8EB"}
                borderRadius={"1rem"}
                flexDirection={"row"}
                p={2}
              >
                <Box display={"flex"}>
                  <Box
                    display={"flex"}
                    sx={{
                      border: "solid 1px #A9A9A9",
                      borderRadius: "5rem",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 1,
                    }}
                  >
                    <img
                      src={
                        event ? "/icons/profile_d.png" : "/icons/profile_d.png"
                      }
                      style={{ width: 30, height: 30 }}
                    />
                  </Box>
                </Box>
                <Box display={"flex"} flexDirection={"column"} pl={5}>
                  <Box
                    display={"flex"}
                    color="black"
                    height={"100%"}
                    sx={{
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography fontSize={15} color={"black"}>
                      {e.name}
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
                    <Typography fontSize={19} color={"black"} fontWeight={800}>
                      {e.content}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })
      ) : (
        <> </>
      )}
      <>
        {canComment === true ? (
          <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={3}>
            <TextField
              sx={{ width: "80%" }}
              value={comment}
              multiline
              maxRows={4}
              onChange={(e) => setComment(e.target.value)}
            />
            <Box display={"flex"} sx={{ width: "20%" }}>
              <Button
                sx={{
                  height: "100%",
                  backgroundColor: "#7149C6",
                  width: "100%",
                  color: "white",
                  ml: 2,
                  "&:hover": {
                    backgroundColor: "#7149C6",
                  },
                }}
                onClick={() => handleSendComment()}
              >
                Send
              </Button>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </>

      {/* participate button */}

      <Box display={"flex"} sx={{ width: "100%" }} justifyContent={"center"}>
        <Button
          disabled={
            !isWIP ||
            user?.type !== UserType.LEARNER ||
            event.registered.includes(user?._id ?? "")
          }
          sx={{
            height: 50,
            backgroundColor: "#7149C6",
            width: "100%",
            color: "white",
            mt: 4,
            "&:hover": {
              backgroundColor: "#7149C6",
            },
            "&:disabled": {
              backgroundColor: "#cccccc",
            },
          }}
          onClick={() => handleRequest()}
        >
          {!isWIP
            ? "The Event ends!"
            : event.registered.includes(user?._id ?? "")
            ? "You already Registered!"
            : "Request to participate"}
        </Button>
      </Box>
    </BasicModal>
  );
};
export default EventModal;
