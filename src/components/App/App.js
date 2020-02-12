import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
          <div>
            <h1>Make anything you want</h1>
          </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
