import React, { Component } from "react";
import { connect } from 'react-redux';

//components
import IndividualMovie from '../IndividualMovie/IndividualMovie';

class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIES'});
    }
    render() {
        return (
          <div>
            {/* {this.props.reduxState.movies.map(movie => (
              <div key={movie.id}>
                <img src={movie.poster} />
                {movie.title}
                {movie.description}
              </div>
            ))} */}
            {this.props.reduxState.movies.map(movie => <IndividualMovie movie={movie}/>)}
          </div>
        );
    }
}

// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);