import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function TravelAdviceDetails({ travelAdvise }) {
  const advice = travelAdvise.advise.replaceAll(/<.*?>/g, "");

  return (
    <AccordionDetails>
      <Typography>{advice}</Typography>
      <a href={travelAdvise.url} target="_blank">
        {travelAdvise.url}
      </a>
    </AccordionDetails>
  );
}
