import React from "react";
import { Container, Grid } from "@mui/material";
import { useCountriesList } from "../contexts/Context";
import CountryCard from "../components/CountryCard";

export default function CountryCards() {
  const countriesArray = useCountriesList();
  return (
    <Container sx={{ my: 2 }}>
      <Grid container spacing={3}>
        {countriesArray.map((element, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              {CountryCard(index, element.img, element.name, "")}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
