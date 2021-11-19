import React, { useState } from "react";
import { useFilteredList } from "../contexts/Context";
import CountryCards from "../components/CountryCards";
import AppBarBackToTop from "../components/AppBarBackToTop";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[50],
    },
  },
});
export default function MainPage() {
  const [countries, setCountries] = useState("");
  const [filteredList, setFilteredList] = useFilteredList();
  let loaded = Array.isArray(filteredList);
  console.log("filtered list", filteredList);

  // useEffect(() => {
  //   setFilteredList(countries);
  //   loaded = Array.isArray(filteredList)
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppBarBackToTop />
      {loaded ? (
        <CountryCards />
      ) : (
        <LinearProgress sx={{ bgcolor: blueGrey[500] }} />
      )}
    </ThemeProvider>
  );
}
