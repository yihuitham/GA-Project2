import React from "react";
import { useCountriesList } from "../contexts/Context";
import CountryCards from "../components/CountryCards";
import AppBarBackToTop from "../components/AppBarBackToTop";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});
export default function MainPage() {
  const [countries, setCountries] = useCountriesList();
  const loaded = Array.isArray(countries);

  return (
    <ThemeProvider theme={theme}>
      <AppBarBackToTop />
      {loaded ? <CountryCards /> : <LinearProgress />}
    </ThemeProvider>
  );
}
