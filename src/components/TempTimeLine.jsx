import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function TempTimeline({ tempData }) {
  console.log("tempData", tempData);
  const temperatureLine = tempData.map((temp, i, { length }) => {
    if (length - 1 !== i) {
      return (
        <TimelineItem>
          <TimelineOppositeContent>{temp[0]}</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{`${temp[1]}\u00B0C`}</TimelineContent>
        </TimelineItem>
      );
    } else {
      return (
        <TimelineItem>
          <TimelineOppositeContent>{temp[0]}</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>{`${temp[1]}\u00B0C`}</TimelineContent>
        </TimelineItem>
      );
    }
  });
  return temperatureLine;
}
