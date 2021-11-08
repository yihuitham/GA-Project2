import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Timeline from "@mui/lab/Timeline";
import TempTimeline from "./TempTimeLine";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Link } from "react-router-dom";

export default function SimpleAccordion({ details, temp }) {
  const elevenMonths = temp.slice(0, temp.length - 1);
  const twelvethMonth = temp[temp.length - 1];
  const plugs = details.electricity.plugs.map((plug) => {
    return `${plug}, `;
  });
  const vaccinations = details.vaccinations.map((vac) => {
    return (
      <>
        <Typography>{vac.name}:</Typography>
        <Typography>{vac.message}</Typography>
      </>
    );
  });
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Travel Advice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{details.advise.UA.advise}</Typography>
          <Typography component={Link}>{details.advise.CA.url}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Electricity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{`Voltage: ${details.electricity.voltage}V`}</Typography>
          <Typography>{`Frequency: ${details.electricity.frequency}Hz`}</Typography>
          <Typography>Plugs: {plugs}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Vaccinations</Typography>
        </AccordionSummary>
        <AccordionDetails>{vaccinations}</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Weather</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Timeline>
            {elevenMonths.map((data) => {
              return TempTimeline(data[0], data[1]);
            })}
            <TimelineItem>
              <TimelineOppositeContent>
                {twelvethMonth[0]}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
              </TimelineSeparator>
              <TimelineContent>{`${twelvethMonth[1]}\u00B0C`}</TimelineContent>
            </TimelineItem>
          </Timeline>
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
