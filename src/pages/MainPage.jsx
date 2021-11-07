import React from "react";
import { CircularProgress, Container, Grid } from "@mui/material";
import { useCountriesList } from "../contexts/Context";
import CountryCards from "../components/CountryCards";

export default function MainPage() {
  const countriesArray = useCountriesList();
  const loaded = Array.isArray(countriesArray);
  console.log(Array.isArray(countriesArray));
  return loaded ? <CountryCards /> : <CircularProgress />;
}
