import {
  Typography,
  Button,
  Box,
  Grid,
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const image =
  "https://static.travelworks.de/media/header/work-and-travel/work-and-travel-header_01.jpg";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
}));

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
  typography: { fontFamily: "Bungee Inline, cursive" },
});
theme = responsiveFontSizes(theme);

function IntroductionPage() {
  const classes = useStyles();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.mainContent}>
        <Grid
          container
          direction="column"
          pt={5}
          pb={5}
          backgroundColor="rgba(255,255,255, 0.5)"
        >
          <Grid item>
            <Typography variant="h3">Planning to travel somewhere?</Typography>
          </Grid>
          <Grid item p={2}>
            <Button
              variant="contained"
              size={smallScreen ? "small" : "large"}
              component={Link}
              to="/mainpage"
              className={classes.button}
            >
              Let's get you ready!
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default IntroductionPage;
