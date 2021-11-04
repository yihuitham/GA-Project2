import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const [details, setDetails] = useState(null);
  const params = useParams();
  const countryUrl = `https://travelbriefing.org/${params.destination}?format=json`;

  const countryDetails = async () => {
    try {
      const response = await fetch(countryUrl);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getCountryDetails = async () => {
      const response = await countryDetails();
      setDetails(response);
    };
    getCountryDetails();
  }, []);

  console.log(details);
  return <div>{details ? details.vaccinations[0].message : ""}</div>;
}
