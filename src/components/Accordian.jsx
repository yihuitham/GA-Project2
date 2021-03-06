import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import TravelAdviceDetails from "./DetailsTravelAdvise";
import DetailsElectricity from "./DetailsElectricity";
import DetailsTelephone from "./DetailsTelephone";
import DetailsWeather from "./DetailsWeather";
import DetailsVaccinations from "./DetailsVaccinations";

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
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // console.log("temperature", tempData);

  return (
    <Container sx={{ my: 2 }}>
      <StyledAccordian
        // disabled={details.advise.CA ? false : true}
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
        {details.advise.CA ? (
          <TravelAdviceDetails travelAdvise={details.advise.CA} />
        ) : (
          <TravelAdviceDetails travelAdvise={details.advise.UA} />
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
        <DetailsElectricity electricity={details.electricity} />
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
        <DetailsTelephone telephone={details.telephone} />
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
        <DetailsVaccinations vaccinations={details.vaccinations} />
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
        <DetailsWeather tempData={tempData} />
      </StyledAccordian>
    </Container>
  );
}
