import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

const UploadPhotos = ({ classes }) => (
  <Grid container spacing={24}>
    <Grid item xs={6}>
      <Paper className={classes.paper}>xs=6</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>xs=6</Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper className={classes.paper}>xs=3</Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper className={classes.paper}>xs=3</Paper>
    </Grid>
    <Grid item xs={9}>
      <Paper className={classes.paper}>xs=3</Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper className={classes.paper}>xs=3</Paper>
    </Grid>
  </Grid>
);

UploadPhotos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UploadPhotos);
