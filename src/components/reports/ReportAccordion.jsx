import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CustomAccordion from "../../components/formUI/CustomAccordion";
import CustomButton from "../../components/formUI/CustomButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CustomDatePicker from "../../components/formUI/CustomDatePicker";
import CustomDialog from "../../components/CustomDialog";
const ReportAccordion = ({ children, title = "Add Title" }) => {
  return (
    <CustomAccordion
      header={<CustomButton>Upload Report</CustomButton>}
      title={title}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center">
          <CustomButton>Today's Report</CustomButton>
          <Typography>OR</Typography>
          <CustomDialog
            buttonTitle="See Report by Date"
            buttonProps={{ endIcon: <ArrowDropDownIcon /> }}
          >
            <CustomDatePicker />
          </CustomDialog>
        </Stack>
      </Stack>
      <Box py={2}>{children}</Box>
    </CustomAccordion>
  );
};

export default ReportAccordion;
