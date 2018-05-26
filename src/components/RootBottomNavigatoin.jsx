import React from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SearchIcon from "@material-ui/icons/Search";

const styles = {
  root: {
    width: 500,
    position: "fixed",
    bottom: 0,
    width: "100%"
  }
};

const RootBottomNavigation = ({ classes, currentAction, handleChange }) => (
  <BottomNavigation
    value={currentAction}
    onChange={handleChange}
    className={classes.root}
  >
    <BottomNavigationAction
      label="Recents"
      value="RECENTS"
      icon={<RestoreIcon />}
    />
    <BottomNavigationAction
      label="Search"
      value="SEARCH"
      icon={<SearchIcon />}
    />
    <BottomNavigationAction
      label="Upload"
      value="UPLOAD"
      icon={<CloudUploadIcon />}
    />
  </BottomNavigation>
);

RootBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  currentAction: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentAction: state.rootBottomNavigation.currentAction
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      handleChange: (event, value) => ({ type: value })
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(RootBottomNavigation)
);
