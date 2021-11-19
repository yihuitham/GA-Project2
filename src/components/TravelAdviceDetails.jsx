import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function TravelAdviceDetails({ travelAdvise }) {
  return (
    <AccordionDetails>
      <Typography>{travelAdvise.UA.advise}</Typography>
      <a href={travelAdvise.CA.url} target="_blank">
        {travelAdvise.CA.url}
      </a>
    </AccordionDetails>
  );
}
