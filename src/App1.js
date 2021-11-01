import logo from "./logo.svg";
import "./App.css";
import {
  Typography,
  Button,
  Box,
  Grid,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const image =
  "https://static.travelworks.de/media/header/work-and-travel/work-and-travel-header_01.jpg";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
});

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: "darkred",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          isplay: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          "& h1": {
            color: "black",
          },
        },
      },
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className={classes.background}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h2" component="h1">
                Thinking of going somewhere?
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="contained" component={Link} to="/about">
              Let's get you ready
            </Button>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;

// href="#contained-buttons"
