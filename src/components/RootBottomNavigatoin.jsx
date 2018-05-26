import React from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { compose } from "recompose";

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
      value="recentsPhotos"
      icon={<RestoreIcon />}
    />
    <BottomNavigationAction
      label="Search"
      value="searchPhotos"
      icon={<SearchIcon />}
    />
    <BottomNavigationAction
      label="Upload"
      value="uploadPhotos"
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

const mapDispatchToProps = (dispatch, { history }) =>
  bindActionCreators(
    {
      handleChange: (event, value) => {
        history.push(`/${value}`);
        return { type: value };
      }
    },
    dispatch
  );

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(RootBottomNavigation);
