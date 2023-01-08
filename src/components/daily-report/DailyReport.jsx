import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomPaper from "../UI/CustomPaper";
import CustomTable from "../UI/CustomTable";
import ReportCard1 from "./ReportCard1";
import ReportCard2 from "./ReportCard2";

import RoomsPng from "../../assets/images/rooms.png";
import FbPng from "../../assets/images/f&b.png";
import OodPng from "../../assets/images/ood.png";
import TrPng from "../../assets/images/tr.png";

import BarChart from "../../components/graphs/BarChart";

const DATA1 = [
  { id: 1, img: RoomsPng, name: "Rooms" },
  { id: 2, img: FbPng, name: "Food & Beverages" },
  { id: 3, img: OodPng, name: "OOD" },
  { id: 4, img: TrPng, name: "Total Revenue" },
];

const DailyReport = () => {
  return (
    <Grid container spacing={2}>
      {DATA1.map(({ id, img, name }) => (
        <Grid item xs={12} md={3} key={id}>
          <ReportCard1 img={img} name={name} />
        </Grid>
      ))}
      <Grid item xs={12} md={6}>
        <ReportCard2
          title={
            <Typography variant="h4">
              64.43%
              <Typography variant="h5" component="span" fontWeight={"300"}>
                {" "}
                Occupancy by percentage
              </Typography>
            </Typography>
          }
          subTitle={
            <Typography fontWeight="300">
              Occupancy rate is{" "}
              <Typography component="span" color="primary.light">
                {" "}
                higher than
              </Typography>{" "}
              previous day by{" "}
              <Typography component="span" color="primary.light">
                5.34%
              </Typography>
            </Typography>
          }
          value={54}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ReportCard2
          title={
            <Typography variant="h4">
              12,034 AED
              <Typography variant="h5" component="span" fontWeight={"300"}>
                {" "}
                Average Daily Rate
              </Typography>
            </Typography>
          }
          subTitle={
            <Typography fontWeight="300">
              Average Daily rate is
              <Typography component="span" color="primary.light">
                {" "}
                higher than
              </Typography>{" "}
              previous day by{" "}
              <Typography component="span" color="primary.light">
                0.34%
              </Typography>
            </Typography>
          }
          value={54}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomPaper sx={{ height: "320px" }}>
          <BarChart />
        </CustomPaper>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomPaper sx={{ p: 0 }}>
          <CustomTable
            columns={["Description", "MTD Actual", "MTD Budget", "MTD LY"]}
          />
        </CustomPaper>
      </Grid>
    </Grid>
  );
};

export default DailyReport;
