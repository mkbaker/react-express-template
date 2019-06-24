import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { withRouter } from "react-router-dom";

//material-ui
import Grid from "@material-ui/core/Grid";

class IndividualMovie extends Component {
  handleClick = () => {
      console.log(this.props.movie.title)
      this.props.dispatch({type: 'SET_LAST_CLICKED', payload: this.props.movie.id})
      this.props.history.push('/detail');
      
  };
  
  render() {
    return (
      <Grid item sm={6} key={this.props.movie.id} className="individualMovieDiv">
        <Paper>
          <img
            className="moviePoster"
            src={this.props.movie.poster}
            alt={this.props.movie.title}
            onClick={this.handleClick}
          />
          <h1>{this.props.movie.title}</h1>
          <p className="movieDescription">{this.props.movie.description}</p>
          <br />
        </Paper>
      </Grid>
    );
  }
}

export default withRouter(connect()(IndividualMovie));
