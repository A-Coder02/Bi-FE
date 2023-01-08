import {
  Divider,
  Grid,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import CustomAccordion from "../components/formUI/CustomAccordion";
import CustomButton from "../components/formUI/CustomButton";
import Layout from "../components/Layout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CustomDatePicker from "../components/formUI/CustomDatePicker";
import CustomDialog from "../components/CustomDialog";
import ReportAccordion from "../components/reports/ReportAccordion";
import CustomPaper from "../components/UI/CustomPaper";
import RoomsPng from "../assets/images/rooms.png";
import FbPng from "../assets/images/f&b.png";
import OodPng from "../assets/images/ood.png";
import TrPng from "../assets/images/tr.png";
import ReportCard1 from "../components/daily-report/ReportCard1";
import ReportCard2 from "../components/daily-report/ReportCard2";
import BarChart from "../components/graphs/BarChart";
import CustomTable from "../components/UI/CustomTable";
import DailyReport from "../components/daily-report/DailyReport";
import MonthlyReport from "../components/monthly-report/MonthlyReport";

const DATA1 = [
  { id: 1, img: RoomsPng, name: "Rooms" },
  { id: 2, img: FbPng, name: "Food & Beverages" },
  { id: 3, img: OodPng, name: "OOD" },
  { id: 4, img: TrPng, name: "Total Revenue" },
];

const Home = () => {
  return (
    <Layout>
      <ReportAccordion title="Daily Report">
        <DailyReport />
      </ReportAccordion>
      <ReportAccordion title="Monthly Report">
        <MonthlyReport />
      </ReportAccordion>
    </Layout>
  );
};

export default Home;
