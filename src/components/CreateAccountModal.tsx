import { Box, Button, TextField, Typography } from "@mui/material";
import BasicModal from "./BasicModal";

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
  return (
    <BasicModal
      open={open}
      PaperProps={{ sx: { borderRadius: 0 } }}
      onClose={onClose}
      title={"Create Account"}
    >
      <Box display={"flex"} width={"100%"}>
        <Typography>Email</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"}>
        <TextField sx={{ width: "100%" }} autoComplete="current-password" />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Password</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"}>
        <TextField
          sx={{ width: "100%" }}
          type="password"
          autoComplete="current-password"
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Check Password</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"}>
        <TextField
          sx={{ width: "100%" }}
          type="password"
          autoComplete="current-password"
        />
      </Box>
      <Box display={"flex"} width={"100%"}>
        <Typography>Name</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"}>
        <TextField sx={{ width: "100%" }} autoComplete="current-password" />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Password</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"}>
        <TextField
          sx={{ width: "100%" }}
          type="password"
          autoComplete="current-password"
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
        >
          Create Account
        </Button>
      </Box>
    </BasicModal>
  );
};
export default CreateAccountModal;
