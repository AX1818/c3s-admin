import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import TopNavigationBar from "./TopNavigationBar";
import PhotoDropZone from "./PhotoDropZone";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

const UploadPhotos = ({ classes }) => (
  <div className={classes.root}>
    <Grid item xs={12}>
      <TopNavigationBar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Upload Photos
        </Typography>
        <Button color="inherit">Login</Button>
      </TopNavigationBar>
    </Grid>

    <Grid container spacing={24}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <PhotoDropZone />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  </div>
);

UploadPhotos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UploadPhotos);
