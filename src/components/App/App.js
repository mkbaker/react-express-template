import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";


//components
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import Detail from '../Detail/Detail';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
            <Header />

          <Route path="/" exact component={MovieList} />
          <Route path="/detail" component={Detail} />
        </Router>

        <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState: reduxState
});

export default connect(mapReduxStateToProps)(App);
