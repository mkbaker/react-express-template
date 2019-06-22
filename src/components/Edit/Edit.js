import React, { Component } from "react";
import { connect } from "react-redux";

class Edit extends Component {

    handleCancel = () => {
        //go back to detail page on click
        this.props.history.push('/detail');
    }

    render(){
        return (
          <div>
            <div>
              <button onClick={this.handleCancel}>Cancel</button>
              <button>Save</button>
            </div>
            <div>
              <input placeholder="Movie Title" />
              <br />
              <input placeholder="Description" />
            </div>
          </div>
        );
    }
}

export default connect()(Edit);