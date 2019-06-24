import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

//components
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import Detail from '../Detail/Detail';
import Edit from '../Edit/Edit';

//material-ui
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

import teal from "@material-ui/core/colors/teal";

//this creates the material-ui theme
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#f44336"
    }
  }
});



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Header />

            <Route path="/" exact component={MovieList} />
            <Route path="/detail" component={Detail} />
            <Route path="/edit" component={Edit} />
          </Router>

          {/* used to troubleshoot redux */}
          {/* <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState: reduxState
});

export default connect(mapReduxStateToProps)(App);
