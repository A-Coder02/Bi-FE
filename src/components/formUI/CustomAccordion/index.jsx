import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = ({ header, children, title }) => {
  return (
    <Accordion
      defaultExpanded={true}
      component="div"
      sx={{
        mb: 2,
        background: "none",
        boxShadow: "none",
        "&.Mui-expanded": {
          m: 0,
        },
        "& .Mui-expanded": {
          m: 0,
        },
        "&:before": {
          display: "none",
        },
        "& .MuiAccordionSummary-root": {
          background: "#FFFFFF",
          border: "1px solid #767676",
          borderRadius: "1.2rem",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          py: 0,
          "& .MuiAccordionSummary-content": {
            height: "4rem",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "2rem",
            my: 0,
            "&.Mui-expanded": {
              m: 0,
            },
          },
        }}
      >
        <Typography variant="h5">{title || "Title Here"}</Typography>
        <span>{header}</span>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
