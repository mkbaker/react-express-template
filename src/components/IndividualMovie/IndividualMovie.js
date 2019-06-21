import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

class IndividualMovie extends Component {
  handleClick = () => {
      console.log(this.props.movie.title)
      
  };

  render() {
    return (
      <div key={this.props.movie.id} className="individualMovieDiv">
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
      </div>
    );
  }
}

export default connect()(IndividualMovie);
