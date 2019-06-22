import React, { Component } from "react";
import { connect } from "react-redux";

class Edit extends Component {
    handleCancel = () => {
        this.props.history.push('/detail');
    }
    render(){
        return(
            <div>
                <button onClick={this.handleCancel}>Cancel</button>
                <button>Save</button>
            </div>
        )
    }
}

export default connect()(Edit);