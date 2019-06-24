import React, { Component } from "react";
import { connect } from "react-redux";
//material-ui
import Button from "@material-ui/core/Button";

class Edit extends Component {
  state = {
    description: "",
    id: this.props.reduxState.lastClicked
  };

  //go back to detail page on click
  handleCancel = () => {
    //remind lastClicked what movie we're on
    this.props.dispatch({
      type: "SET_LAST_CLICKED",
      payload: this.state.id
    });
    //bring user back to '/detail'
    this.props.history.push("/detail");
  };

  //update movie description
  handleSave = () => {
                       //update the movie description in the database
                       this.props.dispatch({
                         type: "UPDATE_DESCRIPTION",
                         payload: this.state
                       });
                       //remind lastClicked what movie we're on
                       this.props.dispatch({
                         type: "SET_LAST_CLICKED",
                         payload: this.state.id
                       });
                       //clear local state
                       this.setState({
                         description: ""
                       });
                       //bring user back to '/detail'
                       this.props.history.push("/detail");
                     };

  //update local state with description input
  handleChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSave}
          >
            Save
          </Button>
        </div>
        <div>
          <input placeholder="Movie Title" />
          <br />
          <textarea
            placeholder="Description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState: reduxState
});

export default connect(mapReduxStateToProps)(Edit);