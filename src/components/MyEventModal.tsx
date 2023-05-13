import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import BasicModal from "./BasicModal";
import { UserType } from "../consts/user-const";
import { userSignUp } from "../apis/user";
import { useNavigate } from "react-router-dom";
import { deleteEvent, publishEvent } from "../apis/event";

export interface MyEventModalProps {
  open: boolean;
  onClose: () => void;
  denyCallback?: () => void;
  OID: string;
}

const MyEventModal: React.FC<MyEventModalProps> = ({
  open,
  onClose,
  denyCallback,
  OID,
}) => {
  // Publishing Draft events
  const handlePublish = async () => {
    try {
      const x = await publishEvent(OID);
      console.log(x);
    } catch (e) {
      console.log(e);
    }
  };
  //  Deleting chosen event
  const handleDelete = async () => {
    try {
      const x = await deleteEvent(OID);
      console.log(x);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <BasicModal
      open={open}
      PaperProps={{ sx: { borderRadius: 0 } }}
      onClose={onClose}
      title={"My Event"}
    >
      <Box display={"flex"} sx={{ width: "100%" }} justifyContent={"center"}>
        <Button
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
          onClick={() => handlePublish()}
        >
          Publish
        </Button>
      </Box>
      <Box display={"flex"} sx={{ width: "100%" }} justifyContent={"center"}>
        <Button
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
        >
          Edit
        </Button>
      </Box>
      <Box display={"flex"} sx={{ width: "100%" }} justifyContent={"center"}>
        <Button
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
          onClick={() => handleDelete()}
        >
          Delete
        </Button>
      </Box>
    </BasicModal>
  );
};
export default MyEventModal;
