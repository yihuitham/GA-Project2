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
  mainContent: {
    minHeight: "100vh",
    textAlign: "center",
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
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        },
      },
    },
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#FFFFFF",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

function IntroPage() {
  const classes = useStyles();
  return (
    // <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.mainContent}>
        <div style={{ backgroundColor: "rgba(255,255,255, 0.5)" }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            pt={5}
            pb={5}
            width="100vw"
            backgroundColor="rgba(255,255,255, 0.5)"
          >
            <Grid item>
              <Typography
                variant="h2"
                style={{ fontFamily: "Bungee Inline, cursive" }}
              >
                Planning to travelling somewhere?
              </Typography>
            </Grid>
            <Grid item p={2}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/mainpage"
                style={{ fontFamily: "Bungee Inline, cursive" }}
              >
                Let's get you ready!
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </ThemeProvider>
    // </div>
  );
}

export default IntroPage;
