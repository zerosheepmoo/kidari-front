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
import { toast } from "react-hot-toast";
import { postEventDraft } from "../apis/event";
import { uploadOneFileToS3 } from "../apis/upload";
import { useAtom } from "jotai";
import { userAtom } from "../jotais";
import { RequestPostDraftEvent } from "../interfaces/event-api";

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
  const [user, setUser] = useAtom(userAtom);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [maxPeople, setMaxPeople] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [holdingDate, setHoldingDate] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const uploadS3File = async (
    file: File | null,
    OID: string,
    filename?: string
  ) => {
    if (!file || !OID) return;
    const formData = new FormData();
    let fn = file.name;
    if (filename) {
      const splitted = file.name.split(".");
      const ext = splitted[splitted.length - 1];
      fn = `${filename}.${ext}`;
    }
    formData.append("oneFile", file, fn);
    const res = await uploadOneFileToS3(formData, OID);
    return res;
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleCreateEvent = async () => {
    if (
      !(
        title &&
        description &&
        price &&
        maxPeople &&
        deadline &&
        holdingDate &&
        selectedImage &&
        user
      )
    )
      return;

    const aws = await uploadS3File(selectedImage, user._id);
    console.log(aws, "hey");

    const newEvent: RequestPostDraftEvent = {
      title: title,
      thumbnail: aws ? aws.src : "",
      content: description,
      peopleLimitNumber: String(maxPeople),
      deadline: deadline,
      holdingDate: holdingDate,
    };

    try {
      await postEventDraft(newEvent).then((_res) => {
        console.log("draft created");
        toast.success("You have sucessfully created");
        onClose();
      });
    } catch (e) {
      console.log(e);
    }
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
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        pt={1}
      >
        <Box display={"flex"}>
          <TextField
            type="file"
            //   accept="image/*"
            onChange={handleImageChange}
            inputProps={{
              id: "image-input",
            }}
          />
        </Box>
        <Box display={"flex"}>
          {previewImage && (
            <img
              width={60}
              height={60}
              src={previewImage}
              style={{ objectFit: "cover" }}
              alt="Preview"
            />
          )}
        </Box>
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Title</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Description</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Price</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={price}
          type={"number"}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Max people to apply</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={maxPeople}
          type={"number"}
          onChange={(e) => setMaxPeople(Number(e.target.value))}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Deadline</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={deadline}
          placeholder="YYYY/MM/DD"
          onChange={(e) => setDeadline(e.target.value)}
        />
      </Box>
      <Box display={"flex"} width={"100%"} pt={1}>
        <Typography>Holding Date</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"} pt={1}>
        <TextField
          sx={{ width: "100%" }}
          value={holdingDate}
          placeholder="YYYY/MM/DD"
          onChange={(e) => setHoldingDate(e.target.value)}
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
