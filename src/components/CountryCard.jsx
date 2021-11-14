import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { useCountriesList, useFilteredList } from "../contexts/Context";
import { blueGrey } from "@mui/material/colors";

export default function CountryCard(index, img, country, advice) {
  const [countries, setCountries] = useCountriesList();
  const [filteredList, setFilteredList] = useFilteredList();
  return (
    <Card>
      <CardActionArea
        component={Link}
        to={`/${country}`}
        onClick={() => setFilteredList(countries)}
      >
        <CardMedia component="img" height="140" image={img} alt={country} />
        <CardContent
          sx={{
            bgcolor: blueGrey[50],
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {country}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Travel advice: {advice}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
