import React from "react";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transtion = (
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) => {
  return <Slide direction="up" ref={ref} {...props} />;
};

const ForwardedSlideUpTransition = React.forwardRef(Transtion);

export default ForwardedSlideUpTransition;
