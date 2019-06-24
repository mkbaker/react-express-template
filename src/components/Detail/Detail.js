import React, { Component } from "react";
import { connect } from "react-redux";
//material-ui
import Button from "@material-ui/core/Button";

class Detail extends Component {
    
    componentDidMount() {
        //get the info we need 
        this.props.dispatch({type: 'GET_MOVIE_GENRES'});
        this.props.dispatch({type: 'GET_MOVIES'});
    }

    handleBack = () => {
        //go back to home on click
        this.props.history.push('/');
    }

    handleEdit = () => {
        //go to edit page on click
        this.props.history.push('/edit');
    }


    render() {
        return (
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleBack}
            >
              Back to List
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleEdit}
            >
              Edit
            </Button>
            {/* loop thru movies to find the match and display title */}
            {this.props.reduxState.movies.map(movie =>
              movie.id === this.props.reduxState.lastClicked ? (
                <h1>{movie.title}</h1>
              ) : (
                <></>
              )
            )}

            {/* loop thru movies to find the match and display description */}
            {this.props.reduxState.movies.map(movie =>
              movie.id === this.props.reduxState.lastClicked ? (
                <p>{movie.description}</p>
              ) : (
                <></>
              )
            )}

            <h2>Genres:</h2>
            <ul>
              {this.props.reduxState.genres.map(tag =>
                //ternary operator only shows genres that match with reducer lastClicked
                tag.id === this.props.reduxState.lastClicked ? (
                  <li key={tag.id}>{tag.name}</li>
                ) : (
                  <></>
                )
              )}
            </ul>
          </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
  reduxState: reduxState
});

export default connect(mapReduxStateToProps)(Detail);