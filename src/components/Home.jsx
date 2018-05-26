import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "./AppBar";
import RootBottomNavigation from "./RootBottomNavigatoin";

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

const Home = ({ classes }) => (
  <div className={classes.root}>
    <Grid item xs={12}>
      <AppBar />
    </Grid>
    <h1>HOME</h1>

    <RootBottomNavigation />
  </div>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
