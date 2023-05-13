import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import BasicModal from "./BasicModal";
import { useNavigate } from "react-router-dom";
import { Event } from "../interfaces/event-api";
import { toast } from "react-hot-toast";
import { UserType } from "../consts/user-const";
import { getEventComments } from "../apis/event-comment";
import { EventComment } from "../interfaces/event-comment-api";

export interface EventModalProps {
  open: boolean;
  onClose: () => void;
  denyCallback?: () => void;
  event: Event | undefined;
  userType: UserType;
}

const EventModal: React.FC<EventModalProps> = ({
  open,
  onClose,
  denyCallback,
  event,
  userType,
}) => {
  const navi = useNavigate();
  const [comments, setComments] = useState<EventComment[]>([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const x = await getEventComments(event ? event._id : "");
      if (x) {
        setComments(x);
        console.log(x);
      } else {
        console.log("none");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleRequest = () => {
    toast.success("You have sucessfully requested");
    onClose();
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
          {event ? event.feeForPerson : "0"} Won
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
          borderRadius={"1rem"}
          flexDirection={"row"}
          p={5}
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
              sx={{ alignItems: "flex-end", justifyContent: "flex-start" }}
            >
              <Typography fontSize={20} color={"black"}>
                Registered {event ? event.registeredPeopleNumber : ""}
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
                Pending {event ? event.process : ""}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Box display={"flex"}>
        <Typography fontWeight={700} pt={2}>
          Reviews
        </Typography>
      </Box>
      <Box display={"flex"} sx={{ width: "100%" }} justifyContent={"center"}>
        <Button
          disabled={userType === 2 ? true : false}
          sx={{
            height: 50,
            backgroundColor: "#7149C6",
            width: "100%",
            color: "white",
            mt: 4,
            "&:hover": {
              backgroundColor: "#7149C6",
            },
          }}
          onClick={() => handleRequest()}
        >
          Request to participate
        </Button>
      </Box>
    </BasicModal>
  );
};
export default EventModal;
