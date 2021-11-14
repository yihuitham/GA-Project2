import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TempTimeline from "./TempTimeLine";
import { Link } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";
import { Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledAccordian = styled(Accordion)`
  margin-bottom: 3px;
`;

const StyledAccordianSummary = styled(AccordionSummary)`
  background-color: #607d8b;
  color: #ffffff;
  :active {
    background-color: #b2dfdb;
  }
`;

const StyledExpandIcon = styled(ExpandMoreIcon)`
  color: #ffffff;
`;

export default function ControlledAccordion({ details, tempData }) {
  const available = true;
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
    <Container sx={{ my: 2 }}>
      <StyledAccordian
        disabled={details.advise.UA ? false : true}
        expanded={expanded === "travel-advice"}
        onChange={handleChange("travel-advice")}
      >
        <StyledAccordianSummary
          expandIcon={<StyledExpandIcon />}
          aria-controls="travel-advice"
          id="travel-advice"
        >
          <Typography>Travel Advice</Typography>
        </StyledAccordianSummary>
        {details.advise.UA ? (
          <>
            <AccordionDetails>
              <Typography>{details.advise.UA.advise}</Typography>
              <Typography component={Link}>{details.advise.CA.url}</Typography>
            </AccordionDetails>
          </>
        ) : (
          <></>
        )}
      </StyledAccordian>
      <StyledAccordian
        expanded={expanded === "electricity"}
        onChange={handleChange("electricity")}
      >
        <StyledAccordianSummary
          expandIcon={<StyledExpandIcon />}
          aria-controls="electricity"
          id="electricity"
        >
          <Typography>Electricity</Typography>
        </StyledAccordianSummary>
        <AccordionDetails>
          <Typography>{`Voltage: ${details.electricity.voltage}V`}</Typography>
          <Typography>{`Frequency: ${details.electricity.frequency}Hz`}</Typography>
          <Typography>Plugs: {plugs}</Typography>
        </AccordionDetails>
      </StyledAccordian>
      <StyledAccordian
        expanded={expanded === "telephone"}
        onChange={handleChange("telephone")}
      >
        <StyledAccordianSummary
          expandIcon={<StyledExpandIcon />}
          aria-controls="telephone"
          id="telephone"
        >
          <Typography>Telephone</Typography>
        </StyledAccordianSummary>
        <AccordionDetails>
          <Typography>
            Calling code: +{details.telephone.calling_code}
          </Typography>
          <Typography>Police: {details.telephone.police}</Typography>
          <Typography>Ambulance: {details.telephone.ambulance}</Typography>
          <Typography>Fire Ambulance: {details.telephone.fire}</Typography>
        </AccordionDetails>
      </StyledAccordian>
      <StyledAccordian
        disabled={details.vaccinations[0] ? false : true}
        expanded={expanded === "vaccinations"}
        onChange={handleChange("vaccinations")}
      >
        <StyledAccordianSummary
          expandIcon={<StyledExpandIcon />}
          aria-controls="vaccinations"
          id="vaccinations"
        >
          <Typography>Vaccinations</Typography>
        </StyledAccordianSummary>
        <AccordionDetails>{vaccinations}</AccordionDetails>
      </StyledAccordian>
      <StyledAccordian
        expanded={expanded === "weather"}
        onChange={handleChange("weather")}
      >
        <StyledAccordianSummary
          expandIcon={<StyledExpandIcon />}
          aria-controls="weather"
          id="weather"
        >
          <Typography>Weather</Typography>
        </StyledAccordianSummary>
        <AccordionDetails>
          <TempTimeline tempData={tempData} />
        </AccordionDetails>
      </StyledAccordian>
    </Container>
  );
}
