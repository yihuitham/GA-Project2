import React from "react";
import { useCountryDetails } from "../contexts/Context";
import ControlledAccordion from "./Accordian";

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
export default function Information() {
  const [details, setDetails] = useCountryDetails();
  console.log(details);
  const tempData = months.map((month) => {
    const avgTemp = details.weather[month].tAvg;
    return [month, Math.round(avgTemp * 10) / 10];
  });
  console.log(tempData);

  return <ControlledAccordion details={details} tempData={tempData} />;
}
