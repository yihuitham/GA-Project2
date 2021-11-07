import React from "react";
import { useCountryDetails } from "../contexts/Context";
import Timeline from "@mui/lab/Timeline";
import TempTimeline from "./TempTimeLine";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function Information({ country }) {
  const [details, setDetails] = useCountryDetails();
  console.log(details);
  const temperatures = months.map((month) => {
    const avgTemp = details.weather[month].tAvg;
    return [month, Math.round(avgTemp * 10) / 10];
  });
  console.log(temperatures);
  const elevenMonths = temperatures.slice(0, temperatures.length - 1);
  console.log(elevenMonths);
  const twelvethMonth = temperatures[temperatures.length - 1];
  console.log(twelvethMonth);
  return (
    <Timeline>
      {elevenMonths.map((data) => {
        return TempTimeline(data[0], data[1]);
      })}
      <TimelineItem>
        <TimelineOppositeContent>{twelvethMonth[0]}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>{twelvethMonth[1]}</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
