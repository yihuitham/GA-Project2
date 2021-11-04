import React from "react";
import { useCountriesList } from "../contexts/Context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

function ActionAreaCard(index, img, country, advice) {
  return (
    <Card sx={{ maxWidth: 345 }} key={index}>
      <CardActionArea component={Link} to={`/${country}`}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Travel advice: {advice}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function MainPage() {
  const countriesArray = useCountriesList();
  const Cards = countriesArray.map((element, index) => {
    return ActionAreaCard(index, "", element.name, "");
  });
  console.log(Array.isArray(countriesArray));
  console.log(countriesArray);
  //   return ActionAreaCard();
  return Cards;
}
