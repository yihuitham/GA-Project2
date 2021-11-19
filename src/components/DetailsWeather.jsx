import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { AcUnitOutlined, BeachAccess, WbSunny } from "@mui/icons-material";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function DetailsWeather({ tempData }) {
  console.log("tempData", tempData);
  const temperatureLine = tempData.map((temp, i, { length }) => {
    if (length - 1 !== i) {
      return (
        <AccordionDetails>
          <TimelineItem>
            <TimelineOppositeContent>{temp[0]}</TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot variant="outlined" /> */}
              {temp[1] < 10 ? (
                <AcUnitOutlined sx={{ my: 1 }} />
              ) : (
                <WbSunny sx={{ my: 1 }} />
              )}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{`${temp[1]}\u00B0C`}</TimelineContent>
          </TimelineItem>
        </AccordionDetails>
      );
    } else {
      return (
        <AccordionDetails>
          <TimelineItem>
            <TimelineOppositeContent>{temp[0]}</TimelineOppositeContent>
            <TimelineSeparator>
              {temp[1] < 10 ? (
                <AcUnitOutlined sx={{ my: 1 }} />
              ) : (
                <WbSunny sx={{ my: 1 }} />
              )}
            </TimelineSeparator>
            <TimelineContent>{`${temp[1]}\u00B0C`}</TimelineContent>
          </TimelineItem>
        </AccordionDetails>
      );
    }
  });
  return temperatureLine;
}
