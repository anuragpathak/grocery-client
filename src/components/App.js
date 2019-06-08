import React from 'react';
import {connect} from 'react-redux';

import {loadList} from '../actions/actions';
import GroceryList from './GroceryList';

class App extends React.Component {
    
    componentDidMount() {
        this.props.loadList();
    }

    render() {
        return (
            <div> 
                <GroceryList groceries={this.props.groceryList}></GroceryList>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return {
        groceryList: state.grocery.list
    };
}

export default connect(mapStateToProps, {loadList: loadList})(App);
