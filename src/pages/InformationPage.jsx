import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Information from "../components/Information";
import { useCountryDetails } from "../contexts/Context";

export default function InformationPage() {
  const [details, setDetails] = useCountryDetails();
  const params = useParams();
  const country = params.destination;
  const countryUrl = `https://travelbriefing.org/${country}?format=json`;

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const response = await fetch(countryUrl);
        const data = await response.json();
        setDetails(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCountryDetails();
  }, [countryUrl]);

  // return <div>Hello</div>;

  return (
    <div>
      <div>{country}</div>
      {!details ? <CircularProgress /> : <Information />}
    </div>
  );
}
