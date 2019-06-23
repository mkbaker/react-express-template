import React, { Component } from "react";
import { connect } from "react-redux";

class Edit extends Component {
    state = {
        description: '',
        id: this.props.reduxState.lastClicked
    }

    handleCancel = () => {
        //go back to detail page on click
        this.props.dispatch({
          type: "SET_LAST_CLICKED",
          payload: this.state.id
        });
        this.props.history.push('/detail');
    }

    //update movie description 
    handleSave = () => {
        
        this.props.dispatch({ type: 'UPDATE_DESCRIPTION', payload: this.state});
        this.setState({
            description: ''
        })
    }

    //update local state with description input
    handleChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    render(){
        return (
          <div>
            <div>
              <button onClick={this.handleCancel}>Cancel</button>
              <button onClick={this.handleSave}>Save</button>
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