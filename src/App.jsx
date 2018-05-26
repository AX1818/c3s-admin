import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import "./App.css";

import Home from "./components/Home";
import RecentsPhotos from "./components/RecentsPhotos";
import UploadPhotos from "./components/UploadPhotos";
import SearchPhotos from "./components/SearchPhotos";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const App = ({ classes }) => (
  <Router>
    <div className={classes.root}>
      <Route path="/" exact component={Home} />
      <Route path="/uploadPhotos" component={UploadPhotos} exact />
      <Route path="/recentsPhotos" component={RecentsPhotos} exact />
      <Route path="/searchPhotos" component={SearchPhotos} exact />
    </div>
  </Router>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect()(withStyles(styles)(App));
