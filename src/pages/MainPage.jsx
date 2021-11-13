import React from "react";
import { useCountriesList } from "../contexts/Context";
import CountryCards from "../components/CountryCards";
import BackToTop from "../components/AppBarBackToTop";
import LinearProgress from "@mui/material/LinearProgress";
import { Button, createTheme } from "@mui/material";
import { blueGrey, purple, green } from "@mui/material/colors";
import { ThemeProvider } from "@mui/private-theming";

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: "orange",
  },
});
export default function MainPage() {
  const countriesArray = useCountriesList();
  const loaded = Array.isArray(countriesArray);
  console.log(Array.isArray(countriesArray));
  return (
    <ThemeProvider theme={theme}>
      {/* <Button variant="contained" color="secondary">
        Primary
      </Button> */}
      <BackToTop />
      {loaded ? <CountryCards /> : <LinearProgress />}
    </ThemeProvider>
  );
}
