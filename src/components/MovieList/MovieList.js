import React, { Component } from "react";
import { connect } from 'react-redux';

//material-ui
import Grid from "@material-ui/core/Grid";

//components
import IndividualMovie from '../IndividualMovie/IndividualMovie';

class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIES'});
    }

    render() {
        return (
          <Grid container spacing={6}>
            {this.props.reduxState.movies.map(movie => <IndividualMovie movie={movie} key={movie.id}/>)}
          </Grid>
        );
    }
}

// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
 
export default connect(mapReduxStateToProps)(MovieList);