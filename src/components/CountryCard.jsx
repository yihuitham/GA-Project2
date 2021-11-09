import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function CountryCard(index, img, country, advice) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea component={Link} to={`/${country}`}>
        <CardMedia component="img" height="140" image={img} alt={country} />
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
