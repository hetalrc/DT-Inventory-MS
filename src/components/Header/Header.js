import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, withStyles } from "@material-ui/core";

const HeaderStyle = () => ({
  appBarContainer: {
    background: '#101f73'
  }
});

const Header = ({classes}) => {
  return (
    <AppBar className={classes.appBarContainer}>
      <Toolbar>
      <Typography variant="h6" >Inventory Management System</Typography>
    </Toolbar>
    </AppBar>
  );
}


export default withStyles(HeaderStyle)(Header);
