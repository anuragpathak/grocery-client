import React from 'react';
import {connect} from 'react-redux';
import { upvote, downvote} from '../actions/actions';


class GroceryItem extends React.Component {
    render() {
        return (
            <li>
                <span>Name: {this.props.name}  Vote: {this.props.vote}</span> 
                <button onClick={() => this.props.upvote(this.props.id)}>UPVOTE</button>
                <button onClick={() => this.props.downvote(this.props.id)}>DOWNVOTE</button>
            </li>
        )
    }
}



export default connect(undefined, {upvote , downvote})(GroceryItem);

