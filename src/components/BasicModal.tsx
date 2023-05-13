import React from "react";
import {
  Dialog,
  DialogProps,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import ForwardedSlideUpTransition from "./transition/ForwardedSlideUpTransition";

import { Close } from "@mui/icons-material";

interface BasicModalProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  p?: number | string;
  children?: React.ReactNode;
}

const BasicModal: React.FC<BasicModalProps & DialogProps> = ({
  open,
  onClose,
  title,
  p = 3,
  children,
  ...dialogProps
}) => {
  return (
    // Modal Component that can be used for all
    <Dialog
      {...dialogProps}
      open={open}
      onClose={onClose}
      scroll={"paper"}
      TransitionComponent={ForwardedSlideUpTransition}
      PaperProps={{
        ...dialogProps.PaperProps,
        sx: {
          width: "100%",
          height: "auto",
          maxHeight: "900px",
          borderRadius: "20px",
          p: p,
          ...dialogProps.PaperProps?.sx,
        },
      }}
    >
      {title && (
        <DialogTitle
          sx={{ p: 0, pb: 1, backgroundColor: "transparent" }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            sx={{
              fontSize: 18,
            }}
          >
            {title}
          </Typography>
          {onClose && (
            <IconButton onClick={onClose} sx={{ mr: -1.5 }}>
              <Close />
            </IconButton>
          )}
        </DialogTitle>
      )}
      {children}
    </Dialog>
  );
};

export default BasicModal;
