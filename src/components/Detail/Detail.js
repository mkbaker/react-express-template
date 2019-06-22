import React, { Component } from "react";
import { connect } from "react-redux";


class Detail extends Component {
    
    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIE_GENRES', payload: this.props.reduxState.lastClicked });
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
                <button onClick={this.handleBack}>Back to List</button>
                <button onClick={this.handleEdit}>Edit</button>
                <h1>{this.props.reduxState.lastClicked.title}</h1>
                <p>{this.props.reduxState.lastClicked.description}</p>
                <ul>
                    {this.props.reduxState.genres.map(tag => (
                        tag.title === this.props.reduxState.lastClicked.title ?
                        <li key={tag.id}>{tag.name}</li> 
                        :
                        <></>
                        
                        
                    ))}
                </ul>

            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
  reduxState: reduxState
});

export default connect(mapReduxStateToProps)(Detail);