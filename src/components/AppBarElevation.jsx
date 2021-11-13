import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar({ country, children }, props) {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <ElevationScroll {...props}> */}
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            {country}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* </ElevationScroll> */}
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>{children}</Box>
      </Container>
    </React.Fragment>
  );
}
