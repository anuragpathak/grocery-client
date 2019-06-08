import React from 'react';
import GroceryItem from   './GroceryItem';

const GroceryList = (props) => {

    const listItems = props.groceries && props.groceries.map((gr) =>
        <GroceryItem key={gr.id} id={gr.id} name={gr.name} vote={gr.vote}></GroceryItem>
    );

    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default GroceryList;