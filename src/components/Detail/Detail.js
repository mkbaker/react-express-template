import React, { Component } from "react";
import { connect } from "react-redux";


class Detail extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.reduxState.lastClicked.title}</h1>

            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
  reduxState: reduxState
});

export default connect(mapReduxStateToProps)(Detail);