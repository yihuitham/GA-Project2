import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function DetailsTelephone({ telephone }) {
  return (
    <AccordionDetails>
      <Typography>Calling code: +{telephone.calling_code}</Typography>
      <Typography>Police: {telephone.police}</Typography>
      <Typography>Ambulance: {telephone.ambulance}</Typography>
      <Typography>Fire Ambulance: {telephone.fire}</Typography>
    </AccordionDetails>
  );
}
