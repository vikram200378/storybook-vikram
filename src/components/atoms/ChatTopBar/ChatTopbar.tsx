import { Box, IconButton } from "@mui/material";
import type React from "react";

import PenIcon from "../../../assets/pen.svg";
import FilterIcon from "../../../assets/filter.svg";
import CancelIcon from "../../../assets/cancel.svg";

export const ChatTopbar: React.FC = () => {
  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ flexGrow: 1 }}
      >
        <IconButton aria-label="edit" sx={{ width: "36px", height: "36px" }}>
          <img src={PenIcon} alt="edit" />
        </IconButton>
        <IconButton aria-label="filter" sx={{ width: "36px", height: "36px" }}>
          <img src={FilterIcon} alt="filter" />
        </IconButton>
      </Box>
      <IconButton aria-label="cancel" sx={{ width: "36px", height: "36px" }}>
        <img src={CancelIcon} alt="cancel" />
      </IconButton>
    </Box>
  );
};
