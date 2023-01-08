import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import CustomPaper from "../UI/CustomPaper";

const MonthlyReport = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CustomPaper
          sx={{
            background:
              "linear-gradient(-270.12deg, #303030 0.99%, #585858 97.5%)",
          }}
        >
          <Stack direction="row" spacing={3}>
            <Box position={"relative"}>
              <CircularProgress
                thickness={4}
                sx={(theme) => ({
                  "& .MuiCircularProgress-circle": {
                    color: theme.palette.primary.light,
                  },
                  "& circle": {
                    strokeLinecap: "round",
                  },
                })}
                size={200}
                variant="determinate"
                value={80}
                color="primary"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  "& > *": {
                    color: "white",
                  },
                }}
              >
                <Typography variant="h4">64.43%</Typography>
                <Typography variant="h5" component="span">
                  GOP
                </Typography>{" "}
                <Typography component="span">Actual</Typography>
              </Box>
            </Box>
            <Stack spacing={3} justifyContent="center">
              <Box
                sx={{
                  "& > *": {
                    color: "white",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  component={"span"}
                  sx={(theme) => ({ color: theme.palette.primary.light })}
                >
                  1.43%{" "}
                </Typography>
                <Typography variant="h5" component={"span"}>
                  less variation than GOP
                </Typography>{" "}
                <Typography component={"span"}>budget</Typography>{" "}
              </Box>
              <Typography
                sx={(theme) => ({
                  color: "white",
                  "& > span": {
                    color: theme.palette.primary.light,
                  },
                })}
              >
                GOP is <span> higher than</span> YTD by <span>5.34%</span>
              </Typography>
            </Stack>
          </Stack>
        </CustomPaper>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomPaper>sec 2</CustomPaper>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomPaper>bar chart</CustomPaper>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomPaper>bar chart table</CustomPaper>
      </Grid>{" "}
      <Grid item xs={12} md={6}>
        <CustomPaper>pie chart</CustomPaper>
      </Grid>{" "}
      <Grid item xs={12} md={6}>
        <CustomPaper>pie chart table</CustomPaper>
      </Grid>
    </Grid>
  );
};

export default MonthlyReport;
