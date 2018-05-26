import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import "./App.css";
import AppBar from "./components/AppBar";

import RootBottomNavigation from "./components/RootBottomNavigatoin";

import RecentsPhotos from "./components/RecentsPhotos";
import UploadPhotos from "./components/UploadPhotos";
import SearchPhotos from "./components/SearchPhotos";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const App = ({ classes }) => (
  <Router>
    <div className={classes.root}>
      <Grid item xs={12}>
        <AppBar />
      </Grid>

      <Route path="/uploadPhotos" component={UploadPhotos} />
      <Route path="/recentsPhotos" component={RecentsPhotos} />
      <Route path="/searchPhotos" component={SearchPhotos} />

      <RootBottomNavigation />
    </div>
  </Router>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect()(withStyles(styles)(App));
