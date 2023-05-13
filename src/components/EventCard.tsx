import { Box, Typography } from "@mui/material";
import React from "react";

export interface EventCardProps {
  deadline: string;
  holdingDate: string;
  onClick?: () => void;
  thumbnail: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({
  onClick,
  deadline,
  thumbnail,
  title,
  holdingDate,
}) => {
  return (
    <Box
      display={"flex"}
      height={400}
      width={250}
      minWidth={250}
      maxWidth={250}
      flexDirection={"column"}
      mr={2}
      onClick={onClick}
      flex={1}
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
          src={thumbnail ?? "/images/baking.webp"}
          style={{
            borderRadius: "5px 5px 0 0",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        display={"flex"}
        height={130}
        width={"100%"}
        sx={{
          borderRadius: "0 0 5px 5px",
          border: "solid 1px #E5E8EB",
          borderTop: "",
          flexDirection: "column",
          p: 2,
          justifyContent: "space-between",
        }}
      >
        <Typography display={"flex"}>{holdingDate}</Typography>
        <Typography
          display={"flex"}
          sx={{
            fontSize: 23,
            fontWeight: 600,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
          }}
        >
          {title}
        </Typography>

        <Box display={"flex"} justifyContent={"flex-end"}>
          <Typography display={"flex"} fontSize={13}>
            ~ {deadline}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EventCard;
