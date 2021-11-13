import React from "react";
import { useCountriesList, useFilteredList } from "../contexts/Context";
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
  const [filteredList, setFilteredList] = useFilteredList();
  const loaded = Array.isArray(filteredList);
  console.log("filtered list", filteredList);

  return (
    <ThemeProvider theme={theme}>
      <AppBarBackToTop />
      {loaded ? <CountryCards /> : <LinearProgress color="info" />}
    </ThemeProvider>
  );
}
