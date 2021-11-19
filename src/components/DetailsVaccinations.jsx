import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function DetailsVaccinations({ vaccinations }) {
  const vaccinationMap = vaccinations.map((vac, i) => {
    return (
      <div key={i}>
        <Typography style={{ fontWeight: 600 }}>{vac.name}:</Typography>
        <Typography>{vac.message}</Typography>
      </div>
    );
  });
  return <AccordionDetails>{vaccinationMap}</AccordionDetails>;
}
