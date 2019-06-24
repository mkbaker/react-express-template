import React, { Component } from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Header extends Component {
    render() {
        return (
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                  Terrible Movie Summaries
                </Typography>
            </Toolbar>
          </AppBar>
        );
    }
}

export default Header;