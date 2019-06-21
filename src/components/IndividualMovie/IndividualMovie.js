import React, { Component } from "react";
import { connect } from "react-redux";

class IndividualMovie extends Component {
    
    render() {
        return (
          <div key={this.props.movie.id}>
            <img src={this.props.movie.poster} />
            {this.props.movie.title}
            {this.props.movie.description}
          </div>
        );
    }
}

























export default connect()(IndividualMovie);