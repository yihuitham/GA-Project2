import { LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ElevateAppBar from "../components/AppBarElevation";
import Information from "../components/Information";
import { useCountryDetails } from "../contexts/Context";
import { createTheme, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: blueGrey[50] },
  },
});
export default function InformationPage() {
  const [details, setDetails] = useCountryDetails();
  const params = useParams();
  const country = params.destination;
  const countryUrl = `https://travelbriefing.org/${country}?format=json`;

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const response = await fetch(countryUrl);
        const data = await response.json();
        setDetails(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCountryDetails();
  }, [countryUrl]);

  // return <div>Hello</div>;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ElevateAppBar country={country} />
        {!details ? <LinearProgress /> : <Information />}
      </ThemeProvider>
    </div>
  );
}
