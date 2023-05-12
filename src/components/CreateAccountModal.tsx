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

export interface CreateAccountModalProps {
  open: boolean;
  onClose: () => void;
  denyCallback?: () => void;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({
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

  const handleCreateAccont = async () => {
    if (!(email && password && name && checkPassword && type && phone)) return;

    const realType: UserType = type;

    const newUser = await userSignUp({
      name: name,
      email: email,
      phone: phone,
      type: realType,
      password: password,
    });
    if (newUser) {
      console.log("user Created", newUser);
      navi("/login");
      onClose();
    } else {
      console.log("Something Went Wrong", newUser);
    }
  };

  return (
    <BasicModal
      open={open}
      PaperProps={{ sx: { borderRadius: 0 } }}
      onClose={onClose}
      title={"Create Account"}
    >
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Email</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Password</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Check Password</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          type="password"
          autoComplete="current-password"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Name</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Phone</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>You are ?</Typography>
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{ width: "100%" }}
          value={type}
          onChange={(e) => {
            e.stopPropagation();
            setType(Number(e.target.value));
          }}
        >
          <MenuItem value={UserType.LEARNER}>Taker</MenuItem>
          <MenuItem value={UserType.GIVER}>Giver</MenuItem>
        </Select>
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
          onClick={() => handleCreateAccont()}
        >
          Create Account
        </Button>
      </Box>
    </BasicModal>
  );
};
export default CreateAccountModal;
