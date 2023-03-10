import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CustomPaper = ({ children, sx = {}, paperSx = {}, ...otherProps }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px #363636 solid",
        borderRadius: "20px",
        overflow: "hidden",
        ...paperSx,
      }}
    >
      {/* just to config email */}
      <Box sx={{ px: 3, py: 2, ...sx }} {...otherProps}>
        {children}
      </Box>
    </Paper>
  );
};

export default CustomPaper;
