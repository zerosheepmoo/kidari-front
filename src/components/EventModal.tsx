import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import BasicModal from "./BasicModal";
import { useState } from "react";
import { UserType } from "../consts/user-const";
import { userSignUp } from "../apis/user";
import { useNavigate } from "react-router-dom";
import { Event } from "../interfaces/event-api";

export interface EventModalProps {
  open: boolean;
  onClose: () => void;
  denyCallback?: () => void;
  event: Event | undefined;
}

const EventModal: React.FC<EventModalProps> = ({
  open,
  onClose,
  denyCallback,
  event,
}) => {
  const navi = useNavigate();

  return (
    <BasicModal
      open={open}
      PaperProps={{ sx: { borderRadius: 0 } }}
      onClose={onClose}
      title={event ? event.title : ""}
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
          src={event ? event.thumbnail : "public/images/baking.webp"}
          style={{
            borderRadius: "5px 5px 0 0",
            objectFit: "cover",
          }}
        />
      </Box>
    </BasicModal>
  );
};
export default EventModal;
