import React, { Component } from "react";
import { connect } from "react-redux";


class Detail extends Component {

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
                <button onClick={this.handleBack}>Back to List</button>
                <button onClick={this.handleEdit}>Edit</button>
                <h1>{this.props.reduxState.lastClicked.title}</h1>
                <p>{this.props.reduxState.lastClicked.description}</p>

            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
  reduxState: reduxState
});

export default connect(mapReduxStateToProps)(Detail);