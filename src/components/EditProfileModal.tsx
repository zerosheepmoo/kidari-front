import React, { useEffect, useState } from "react";
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
import { patchMe, userSignUp } from "../apis/user";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../jotais";
import { RequestPatchMe } from "../interfaces/user-api";

export interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  denyCallback?: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  open,
  onClose,
}) => {
  const [user, setUser] = useAtom(userAtom);
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [intro, setIntro] = useState("");
  const [type, setType] = useState(2);

  useEffect(() => {
    if (user) {
      setAccount(user.account);
      setName(user.name);
      setType(user.type);
      setPhone(user.phone);
      setIntro(user.introduction);
      console.log("hey");
    }
  }, [user]);

  const handleEdit = async () => {
    if (!(account && name && phone)) return;

    const changedUser: RequestPatchMe = {
      name: name,
      phone: phone,
      account: account,
      introduction: intro,
    };
    // setUser({ ...user,});

    const newUser = await patchMe(changedUser);

    if (newUser) {
      console.log("user Created", newUser);
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
      title={"Edit Profile"}
    >
      {/* name section */}
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
      {/* phone section */}
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
      {/* usertype */}
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
          <MenuItem value={UserType.LEARNER}>Learner</MenuItem>
          <MenuItem value={UserType.GIVER}>Giver</MenuItem>
        </Select>
      </Box>
      {/* account section */}
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Account Number (optional)</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </Box>
      {/* introduction section */}
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>introduction (optional)</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
        />
      </Box>
      {/* confirm button */}
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
          onClick={() => handleEdit()}
        >
          Confirm Edit
        </Button>
      </Box>
    </BasicModal>
  );
};
export default EditProfileModal;
