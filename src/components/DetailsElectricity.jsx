import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function DetailsElectricity({ electricity }) {
  const plugs = electricity.plugs.map((plug, i, { length }) => {
    if (length - 1 === i) {
      return `${plug}`;
    } else {
      return `${plug}, `;
    }
  });

  return (
    <AccordionDetails>
      <Typography>{`Voltage: ${electricity.voltage}V`}</Typography>
      <Typography>{`Frequency: ${electricity.frequency}Hz`}</Typography>
      <Typography>Plugs: {plugs}</Typography>
    </AccordionDetails>
  );
}
