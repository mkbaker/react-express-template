import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

//components
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />

        <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState: reduxState
});

export default connect(mapReduxStateToProps)(App);
