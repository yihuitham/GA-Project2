import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TempTimeline from "./TempTimeLine";
import { Link } from "react-router-dom";

export default function ControlledAccordion({ details, tempData }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log("temperature", tempData);
  const plugs = details.electricity.plugs.map((plug, i, { length }) => {
    if (length - 1 === i) {
      return `${plug}`;
    } else {
      return `${plug}, `;
    }
  });
  const vaccinations = details.vaccinations.map((vac, i) => {
    return (
      <div key={i}>
        <Typography style={{ fontWeight: 600 }}>{vac.name}:</Typography>
        <Typography>{vac.message}</Typography>
      </div>
    );
  });
  return (
    <div>
      <Accordion
        expanded={expanded === "travel-advice"}
        onChange={handleChange("travel-advice")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="travel-advice"
          id="travel-advice"
        >
          <Typography>Travel Advice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{details.advise.UA.advise}</Typography>
          <Typography component={Link}>{details.advise.CA.url}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "electricity"}
        onChange={handleChange("electricity")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="electricity"
          id="electricity"
        >
          <Typography>Electricity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{`Voltage: ${details.electricity.voltage}V`}</Typography>
          <Typography>{`Frequency: ${details.electricity.frequency}Hz`}</Typography>
          <Typography>Plugs: {plugs}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "telephone"}
        onChange={handleChange("telephone")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="telephone"
          id="telephone"
        >
          <Typography>Telephone</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Calling code: +{details.telephone.calling_code}
          </Typography>
          <Typography>Police: {details.telephone.police}</Typography>
          <Typography>Ambulance: {details.telephone.ambulance}</Typography>
          <Typography>Fire Ambulance: {details.telephone.fire}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "vaccinations"}
        onChange={handleChange("vaccinations")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="vaccinations"
          id="vaccinations"
        >
          <Typography>Vaccinations</Typography>
        </AccordionSummary>
        <AccordionDetails>{vaccinations}</AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "weather"}
        onChange={handleChange("weather")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="weather"
          id="weather"
        >
          <Typography>Weather</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TempTimeline tempData={tempData} />
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
