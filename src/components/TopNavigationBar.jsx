import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/ArrowBack";

import { compose } from "recompose";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

const styles = {
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
};

const TopNavigationBar = ({ classes, children, goHome }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={goHome}
        >
          <MenuIcon />
        </IconButton>
        {children}
      </Toolbar>
    </AppBar>
  </div>
);

TopNavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  goHome: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, { history }) =>
  bindActionCreators(
    {
      goHome: () => {
        history.push(`/`);
        return { type: "home" };
      }
    },
    dispatch
  );

export default compose(
  withRouter,
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(TopNavigationBar);
