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
import { toast } from "react-hot-toast";

export interface CreateEventModalProps {
  open: boolean;
  onClose: () => void;
  denyCallback?: () => void;
}

const CreateEventModal: React.FC<CreateEventModalProps> = ({
  open,
  onClose,
  denyCallback,
}) => {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState(2);
  const [phone, setPhone] = useState("");

  const handleCreateEvent = async () => {
    toast.success("You have sucessfully created");
    onClose();
  };

  return (
    <BasicModal
      open={open}
      PaperProps={{ sx: { borderRadius: 0 } }}
      onClose={onClose}
      title={"Create Event"}
    >
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Image</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Title</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Description</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Price</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Deadline</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
          onClick={() => handleCreateEvent()}
        >
          Create Event
        </Button>
      </Box>
    </BasicModal>
  );
};
export default CreateEventModal;
